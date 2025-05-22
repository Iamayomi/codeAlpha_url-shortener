import { Request, Response } from "express";
import { Logger, sendError, validateUrl } from "../lib";
import { redirectUrl, shortenUrl } from "../service";

export const shortener = async (req: Request, res: Response) => {
  const { url } = req.body;

  console.log(url);

  if (!url || !validateUrl(url)) {
    Logger.warn(`Invalid URL provided: ${url}`);
    sendError.BadRequestError("Invalid URL provided");
  }

  try {
    const shortUrl = await shortenUrl(url);

    Logger.success(`Shortened URL: ${shortUrl}`);

    res.json({ shortUrl });
  } catch (error) {
    Logger.error(`Failed to shorten URL: ${error}`);
    sendError.serverError("Failed to shorten URL");
  }
};

export const shortCode = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  try {
    const originalUrl = await redirectUrl(shortCode);

    if (!originalUrl) {
      Logger.warn(`Short URL not found: ${shortCode}`);
      sendError.notfoundError("Short URL not found");
    }

    res.redirect(`${originalUrl}`);
    Logger.info(`Redirecting to: ${originalUrl}`);
  } catch (error) {
    Logger.error(`Redirect error: ${error}`);
    sendError.serverError("Internal server error");
  }
};
