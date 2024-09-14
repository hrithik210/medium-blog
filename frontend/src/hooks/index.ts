import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";

interface Blog {
    id: number; 
    title: string;
    content: string;
    author: {
        name: string;
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
