import {api} from '../../api';

export  const getPhotos = async (page, limit) => {
    const response = await api.get("/photos",{
        params: {
            '__photo': page,
            '_limit': limit,
        },
    });

    return response.data;

}

export const getPhotoById = async (id) => {
    const response = await api.get(`/photos/${id}`);

    return response.data;

}
