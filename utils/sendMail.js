const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: process.env.SMPT_PORT === '465', // true for 465, false for other ports
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false, // Disable strict TLS verification
        },
    });
    

    const mailOptions = {
        from: "Tixme <noreply@tixme.co>",
        to: options.email,
        subject: options.subject,
        html: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
