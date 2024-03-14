import Slot from "../models/SlotModel.js";
import Saloon from "../models/SaloonModel.js";
import { createError } from "../utils/error.js";

export const createSlot = async (req, res, next) => {
  const saloonId = req.params.saloonid;
  const newRoom = new Slot(req.body);

  try {
    const savedSlot = await newRoom.save();
    try {
      await Saloon.findByIdAndUpdate(saloonId, {
        $push: { slots: savedSlot._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedSlot);
  } catch (err) {
    next(err);
  }
};

export const updateSlot = async (req, res, next) => {
  try {
    const updatedSlot = await Slot.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSlot);
  } catch (err) {
    next(err);
  }
};

export const deleteSlot = async (req, res, next) => {
  const saloonId = req.params.saloonid;
  try {
    await Slot.findByIdAndDelete(req.params.id);
    try {
      await Saloon.findByIdAndUpdate(saloonId, {
        $pull: { slots: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("slot has been cleared. ");
  } catch (err) {
    next(err);
  }
};

export const getSlot = async (req, res, next) => {
  try {
    const slot = await Slot.findById(req.params.id);
    res.status(200).json(slot);
  } catch (err) {
    next(err);
  }
};

export const getSlots = async (req, res, next) => {
  try {
    const slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    next(err);
  }
};
