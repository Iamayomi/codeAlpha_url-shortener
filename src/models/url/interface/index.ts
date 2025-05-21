import mongoose, { Schema, Document } from "mongoose";

export interface IUrl extends Document {
  shortCode: string;
  originalUrl: string;
  createdAt: Date;
  clicks: number;
}
