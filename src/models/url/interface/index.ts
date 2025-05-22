import mongoose, { Schema, Document } from "mongoose";

export interface IUrl extends Document {
  /** short code */
  shortCode: string;

  /** the original url code */
  originalUrl: string;

  /** short url date created */
  createdAt: Date;

  /** number of url click */
  clicks: number;
}
