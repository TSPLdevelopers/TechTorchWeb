const mongoose = require("mongoose");

const upcomingEventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    activeCount: {
         type: Number,
         default: 0,
         min: 0,
}

    
  },
  { timestamps: true }
);

module.exports = mongoose.model("UpcomingEvent", upcomingEventSchema);