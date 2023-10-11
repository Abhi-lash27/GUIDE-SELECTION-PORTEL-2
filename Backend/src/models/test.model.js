import mongoose from "mongoose";

const Student = new mongoose.Schema(
  {
    name: { type: String, required: true },
    regno: { type: String, required: true },
    batch: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "test-data" },
);

const TestModel = new mongoose.model("TestData", Student)

export default TestModel