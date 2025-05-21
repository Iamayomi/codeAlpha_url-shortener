import { nanoid } from "nanoid";
import { Url, IUrl } from "../models";
import { validateUrl } from "../lib";
import { BASE_URL } from "../lib";

export async function shortenUrl(originalUrl: string): Promise<string> {
  if (!validateUrl(originalUrl)) {
    throw new Error("Invalid URL");
  }

  const shortCode = nanoid(8);

  const existingUrl = await Url.findOne({ originalUrl });
  if (existingUrl) {
    return `${BASE_URL}/${existingUrl.shortCode}`;
  }

  const newUrl = new Url({ shortCode, originalUrl });
  await newUrl.save();

  return `${BASE_URL}/${newUrl.shortCode}`;
}

export async function redirectUrl(shortCode: string): Promise<string | null> {
  const urlDoc = await Url.findOneAndUpdate({ shortCode }, { $inc: { clicks: 1 } }, { new: true });
  return urlDoc ? urlDoc.originalUrl : null;
}
