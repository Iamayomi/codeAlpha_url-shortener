import { Router } from "express";
const router = Router();
import { shortCode, shortener } from "../controllers";

router.post("/shorten", shortener);

router.get("/:shortCode", shortCode);

export default router;
