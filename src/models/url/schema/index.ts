import { IUrl } from "../interface";
import mongoose, { Schema } from "mongoose";

const urlSchema = new mongoose.Schema<IUrl>({
  shortCode: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
});

export const Url = mongoose.model<IUrl>("Url", urlSchema);
