import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

type ResponseData = {
    posts: {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    let { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.status(200).json({ posts });
}