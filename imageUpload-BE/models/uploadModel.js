const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    image: {
      secure_url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
  },
  { timestamps: true },
);

const UploadModel = mongoose.model("UploadModel", uploadSchema);

module.exports = UploadModel;
