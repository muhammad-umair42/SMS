import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullName: { type: String, required: true },
    profilePicture: { type: String },
    class: { type: String, required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
  },
  { timestamps: true },
);

const teacherSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullName: { type: String, required: true },
    profilePicture: { type: String },
  },
  { timestamps: true },
);

const parentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullName: { type: String, required: true },
    profilePicture: { type: String },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  },
  { timestamps: true },
);

const adminSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullName: { type: String, required: true },
    profilePicture: { type: String },
  },
  { timestamps: true },
);

export const Admin = mongoose.model('Admin', adminSchema);
export const Student = mongoose.model('Student', studentSchema);
export const Teacher = mongoose.model('Teacher', teacherSchema);
export const Parent = mongoose.model('Parent', parentSchema);
