import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";

export interface Blog {
    id: number; 
    title: string;
    content: string;
    author: {
        name: string;
    }
}
//fetching blogs with id 
export const useBlog = ({id}: {id: number}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers:{
                Authorization:localStorage.getItem("jwt token")
            }
        }).then((response) => 
            setBlog(response.data.blog));
            setLoading(false);
    }, [id]);

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization:localStorage.getItem("jwt token")
            }
        }).then((response) => 
            setBlogs(response.data.blog));
            setLoading(false);
    }, []);

    return {
        loading,
        blogs
    }

}
