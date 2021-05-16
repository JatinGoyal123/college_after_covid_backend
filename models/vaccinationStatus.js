import mongoose from "mongoose";

const VaccinationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },

  hostel: {
    type: String,
    required: [true, "Please add a hostel Choice"],
  },
  vaccineName: {
    type: String,
    required: true,
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

const VaccinatonStatus = mongoose.model("Vaccinaton", VaccinationSchema);
export default VaccinatonStatus;
