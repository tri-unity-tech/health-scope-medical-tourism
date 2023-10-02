import cookie from 'cookie';
import { API_URL } from '../../../config/index';

export default async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie ?? '');
    const access = cookies.access ?? false;

    if (!access) {
      return res.status(401).json({
        error: 'User unauthorized to make this request',
      });
    }

    try {
      const apiRes = await fetch(
        `http://dashboard.decarbonify.com/api/nextjs/overview`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NDYzOTEzLCJpYXQiOjE2ODczNzc1MTMsImp0aSI6ImVmNDU5N2NjZmZkNjQ4NDZhNzhiMDEyNGRhNGI0N2FhIiwidXNlcl9pZCI6MX0.dz33HHVCIJaayT76RtYk8eS_K-UTcItr84z9xsCT2EE`,
          },
        },
      );

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        // Display the overview data
        console.log(data.overview);
        return res.status(200).json({
          overview: data,
        });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when retrieving user',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
  }
};
