// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const username = req.query.username;

  const API_ENDPOINT = process.env.API_ENDPOINT;
  const API_TOKEN = process.env.API_TOKEN;

  const userResponse = await axios.get(`${API_ENDPOINT}/users?username=${username}`, {
    headers: {
        'x-auth-token': `${API_TOKEN}`,
    }
  });
  
  res.status(200).json(userResponse.data[0])
}
