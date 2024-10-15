import users from '../utils/userData.js'


export const getUsers = async () => {
    return users;
}

export const getUserById = async (id) => {
    return users.find(user => user.id === parseInt(id));
}

export const getUserByUsername = async (username) => {
    return users.find(user => user.username === username);
}

export const createUser = async (user) => {
    const newUser = {
        id: [users.length - 1]?.id + 1 || 1,
        ...user
    }
    users.push(newUser);
    return newUser;
}

export const updateUser = async (id, user) => {
    const index = users.findIndex(user => user.id === id);
    users[index] = {
        ...users[index],
        ...user
    }
    return users[index];
}

export const deleteUser = async (id) => {
    const index = users.findIndex(user => user.id === id);
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
}


export default {getUsers, getUserById, getUserByUsername, createUser, updateUser, deleteUser}


















