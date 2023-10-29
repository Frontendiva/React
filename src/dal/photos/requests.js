import {api} from '../../api';

export  const getPhotos = async () => {
    const response = await api.get("/photos");

    return response.data;

}

export const getPhotoById = async (id) => {
    const response = await api.get(`/photos/${id}`);

    return response.data;

}
