import mongoose, { Document, Schema } from "mongoose";

export interface IShort extends Document {
  _id: string;
  code: string;
  url: string;
  count: number;
  createdOn: number;
  increase: Function;
}

const shortSchema: Schema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  code: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
  },
  createdOn: {
    type: Number,
    required: true,
  },
});

shortSchema.methods.increase = function () {
  this.count += 1;
};

export default mongoose.model<IShort>("Short", shortSchema);
