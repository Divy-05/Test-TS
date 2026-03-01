import { Request, Response } from "express";
import User from "../model/user";

// Create
export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: "User created", user });
};

// Get All
export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json({ message: "Users fetched", users });
};

// Update
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "User updated", user });
};

// Delete
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
