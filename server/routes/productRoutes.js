import express from "express";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(protect, admin, createProduct)

export default router