import mongoose from "mongoose";

const ArrivalSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  state: {
    type: String,
    required: [true, "Please add a state"],
  },
  city: {
    type: String,
  },
  hostel: {
    type: String,
    required: [true, "Please add a hostel Choice"],
  },
  rollNumber: {
    type: Number,
    required: [true],
  },
  contact: {
    type: Number,
    required: [true],
  },
  arrival: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: true,
  },
});

const Arrival = mongoose.model("Arrival", ArrivalSchema);
export default Arrival;
