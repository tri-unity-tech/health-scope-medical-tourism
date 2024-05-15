

// // pages/api/sendEmail.js

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { fullName, email, subject, message } = req.body;

//     // Create a Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       host: 'mail.healthscopemed.com',
//       port: 465, // Use SMTP port 465 for secure connection
//       secure: true, // Set to true for secure connection
//       auth: {
//         user: 'marketing@healthscopemed.com',
//         pass: 'Healthy-Marketing',
//       },
//     });

//     // Define email options
//     let mailOptions = {
//       from: 'marketing@healthscopemed.com',
//       to: 'info.healthscopemed.com',
//       subject: subject,
//       text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Failed to send email' });
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(200).json({ success: true });
//       }
//     });
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// pages/api/sendEmail.js

// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, subject, message } = req.body;

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      return res.status(500).json({ error: 'Email credentials are not set' });
    }

    // Use secure connection if in production, else use non-secure
    const isProduction = process.env.NODE_ENV === 'production';

    let transporter = nodemailer.createTransport({
      host: 'mail.healthscopemed.com',
      port: isProduction ? 465 : 587, // Use 465 for secure, 587 for non-secure
      secure: isProduction, // True for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
    });

    let mailOptions = {
      from: 'marketing@healthscopemed.com',
      to: 'bizimanasalomon85@gmail.com',
      subject: subject,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
