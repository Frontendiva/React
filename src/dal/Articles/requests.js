import {api} from '../../api';

export  const getArticles = async (page, limit) => {
    const response = await api.get("/posts", {
        params: {
            '_page': page,
            '_limit': limit,
        },
    });

    return response.data;

}

export const getArticleById = async (id) => {
    const response = await api.get(`/posts/${id}`);

    return response.data;

}
