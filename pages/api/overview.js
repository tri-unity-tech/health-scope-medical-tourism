import cookie from 'cookie';
import { API_URL } from '/config/index'; // Replace with the appropriate configuration file or directly use the API URL

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    // Parse the cookies from the request headers
    const cookies = cookie.parse(req.headers.cookie || '');

    // Retrieve the token from the cookies
    const token = cookies.token;

    // Make a request to the overview endpoint
    const response = await fetch(`${API_URL}/api/nextjs/overview`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Handle error if the request fails
      res.status(response.status).json({ error: 'Failed to fetch data' });
      return;
    }

    // Retrieve the data from the response
    const data = await response.json();

    // Return the data as the API response
    res.status(200).json(data);
  } catch (error) {
    // Handle any error that occurred during the data fetching process
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
