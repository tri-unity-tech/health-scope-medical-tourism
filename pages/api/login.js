import { API_URL } from '/config/index'; // Replace with the appropriate configuration file or directly use the API URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  // Extract the user credentials from the request body
  const { username, password } = req.body;

  try {
    // Make a request to your token generation endpoint
    const response = await fetch(`${API_URL}/api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // Handle login failure, e.g., display an error message
      res.status(response.status).json({ error: 'Login failed' });
      return;
    }

    // Retrieve the token from the response
    const { token } = await response.json();

    // Set the token as an HTTP-only cookie
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);

    // Return a success message or any relevant data
    res.status(200).json({ success: true });
  } catch (error) {
    // Handle any error that occurred during the login process
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
