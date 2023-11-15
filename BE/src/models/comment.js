import { Schema, Types, model } from 'mongoose';

const CommentSchema = new Schema({
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
  },
  content: { type: String, require: true },
  created_at: { type: Date, default: Date.now },
});

export const Comment = model('Comment', CommentSchema);
