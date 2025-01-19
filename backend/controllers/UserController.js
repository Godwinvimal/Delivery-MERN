import User from '../models/User.js';
import mongoose from 'mongoose';

// Get all users
export const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error while fetch user: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// Store a new user
export const storeUser = async (req, res) => {
    const user = req.body;

    if (!user.name || !user.password || !user.phone_number) {
        return res.status(400).json({ success:false, message: "All fields are required" });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(200).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in saving user: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// Get specific user details
export const editUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User ID" });
    }

    try {
        const user = await User.findById(id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error("Error while fetch user: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }

}

// Update an existing user
export const updateUser = async (req, res) => {
    const {id} = req.params;

    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User ID" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, {new:true});
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        console.error("Error while update user: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// Delete a user
export const deleteUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User ID" });
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error("Error while delete user: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
