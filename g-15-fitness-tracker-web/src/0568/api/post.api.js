import axios from 'axios';
import { BASEURL } from '../../utils';

export const getPosts = () => axios.get(`http://localhost:5000/posts/getallpost`);
export const createPost = (newPost) => axios.post(`http://localhost:5000/posts/addpost`, newPost);
export const createComment = (comment) => axios.post(`http://localhost:5000/posts/comment`, comment);
export const deletePost = (id) => axios.delete(`http://localhost:5000/posts/deletepost/${id}`);