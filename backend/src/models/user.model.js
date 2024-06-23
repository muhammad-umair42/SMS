import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'teacher', 'admin', 'user', 'parent'],
      default: 'user',
    },
    profile: {
      type: Schema.Types.ObjectId,
      refPath: 'Profile',
    },
  },

  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);
