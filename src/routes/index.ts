src/services/urlService.ts _/
import { nanoid } from 'nanoid';
import { Url, IUrl } from '../models/url';
import { validateUrl } from '../types';

export async function shortenUrl(originalUrl: string): Promise<string> {
if (!validateUrl(originalUrl)) {
throw new Error('Invalid URL');
}

const shortCode = nanoid(8);
const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;

const existingUrl = await Url.findOne({ originalUrl });
if (existingUrl) {
return `${baseUrl}/${existingUrl.shortCode}`;
}

const newUrl = new Url({ shortCode, originalUrl });
await newUrl.save();

return `${baseUrl}/${newUrl.shortCode}`;
}

export async function redirectUrl(shortCode: string): Promise<string | null> {
const urlDoc = await Url.findOneAndUpdate(
{ shortCode },
{ $inc: { clicks: 1 } },
{ new: true }
);
return urlDoc ? urlDoc.originalUrl : null;
}
