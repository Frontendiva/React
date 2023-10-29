import {api} from '../../api';

export  const getUsers = async (user, limit) => {
    const response = await api.get("/users", {
        params: {
            '_user': user,
            '_limit': limit,
        },
    });
    return response.data;
}

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);

    return response.data;
}
