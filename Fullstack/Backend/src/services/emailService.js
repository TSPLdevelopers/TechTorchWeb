const nodemailer = require("nodemailer");

// Uses the SMTP settings already present in .env (Zoho by default):
//   SMTP_HOST, SMTP_PORT, ZOHO_EMAIL, ZOHO_APP_PASSWORD
let transporter;

const getTransporter = () => {
  if (transporter) return transporter;
  const user = process.env.ZOHO_EMAIL;
  const pass = process.env.ZOHO_APP_PASSWORD;
  if (!user || !pass) return null;

  const port = Number(process.env.SMTP_PORT) || 587;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.in",
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
};

const sendEmail = async ({ to, subject, text, html }) => {
  const t = getTransporter();

  if (!t) {
    // Not configured: never crash the request. In development the code is
    // printed so password reset can still be tested locally.
    console.warn(`[email] SMTP not configured – would have sent to ${to}: ${subject}\n${text}`);
    if (process.env.NODE_ENV === "production") {
      throw new Error("Email service is not configured");
    }
    return { skipped: true };
  }

  return t.sendMail({
    from: `"TechTorch" <${process.env.ZOHO_EMAIL}>`,
    to,
    subject,
    text,
    html,
  });
};

module.exports = { sendEmail };