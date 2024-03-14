import express from "express";
import {
  createSlot,
  deleteSlot,
  getSlot,
  getSlots,
  updateSlot,
} from "../controller/slot.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:saloonid", verifyAdmin, createSlot);

//update
router.put("/:id", verifyAdmin, updateSlot);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteSlot);

//Get
router.get("/:id", getSlot);

//get all
router.get("/", getSlots);

export default router;
