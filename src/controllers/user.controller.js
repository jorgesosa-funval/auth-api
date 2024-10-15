import {createUser, getUserById, getUsers, updateUser, deleteUser} from '../models/users.model.js'

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const all = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const show = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            res.status(404).json({error: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const update = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const destroy = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export default {createUser, getUsers, getUserById, updateUser, deleteUser}