const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsModel = new Schema(
  {
    Doctor: {
          type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
      required: true,
      unique: true,
    },
    Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
      required: true,
      unique: true,
    },
    Date: {
      type: Date,
      required: true,
    },
    Status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const appointments = mongoose.model("appointments", appointmentsModel);
module.exports = appointments;