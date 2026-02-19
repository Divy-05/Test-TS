import { Request, Response } from "express";
import User from "../model/user";

// Create
export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

// Get All
export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

// Update
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Delete
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
