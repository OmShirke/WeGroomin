import express from "express";
import {
  countByCity,
  countByType,
  createSaloon,
  deleteSaloon,
  getSaloon,
  getSaloons,
  updateSaloon,
} from "../controller/saloonController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createSaloon);

//update
router.put("/:id", verifyAdmin, updateSaloon);

//delete
router.delete("/:id", verifyAdmin, deleteSaloon);

//Get
router.get("/find/:id", getSaloon);

//get all
router.get("/", getSaloons);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
