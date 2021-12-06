const { Schema, model } = require("mongoose");

// Schema to define users of the platform
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    data: {
      type: String,
      default:
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    },
    contentType: {
      type: String,
      default: "image/base64",
    },
  },
});

const user = model("user", userSchema);

module.exports = user;