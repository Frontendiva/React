import {api} from '../../api';

export  const getArticles = async () => {
    const response = await api.get("/posts");

    return response.data;

}

export const getArticleById = async (id) => {
    const response = await api.get(`/posts/${id}`);

    return response.data;
    
}