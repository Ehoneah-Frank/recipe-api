import bcrypt from 'bcrypt'
import { UserModel } from '../models/user.js';



export const register = async (req, res, next) => {
    try {
        // Has user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // Create a new user
        const registeredUser = await UserModel.create({
            ...req.body,
            password: hashedPassword,
        });
        // Return response
        res.status(201).json('User registered successfully');
    } catch (error) {
        next(error);
    }
}

const login = async () => { }

const logout = async () => { }

const profile = async () => { }