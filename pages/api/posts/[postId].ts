import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

type ResponseData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
    const { postId } = req.query;
    let { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    res.status(200).json({ ...post, lol: "lol"});
}