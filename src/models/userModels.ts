import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Compile the model if it hasn't been compiled yet
const UserModel = mongoose.models.users || mongoose.model('users', userSchema);

export { UserModel };
