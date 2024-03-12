import nodemailer from 'nodemailer';

export const mailer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});


const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'zasturman@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js',
};