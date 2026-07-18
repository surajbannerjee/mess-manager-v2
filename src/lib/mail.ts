import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendOTP(email: string, otp: string) {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your account",
    html: `
      <div style="font-family:Arial,sans-serif">
        <h2>Verify your account</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP expires in 5 minutes.</p>
      </div>
    `,
  });
}