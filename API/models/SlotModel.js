import mongoose from "mongoose";
const SlotSchema = new mongoose.Schema(
  {
    purpose: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    SlotNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Slot", SlotSchema);
