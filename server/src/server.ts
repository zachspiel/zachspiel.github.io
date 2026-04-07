import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

const PORT = process.env.PORT || 5004;
const EMAIL = process.env.USER_EMAIL || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
const isProduction = process.env.NODE_ENV === "production";

const app = express();
app.use(
  cors({
    origin: isProduction
      ? "https://zachspiel.github.io"
      : "http://localhost:3000",
    methods: ["POST"],
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: name,
    to: EMAIL,
    subject: "Message recieved from portfolio website!",
    html: `<p>Message from: ${name}</p>
            <p>${name}'s email: ${email}</p>
            <p>Message: ${message}</p>
            `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Message cannot be sent");
      res.status(500).json({ status: "ERROR" });
    } else {
      console.log("Message sent");
      res.status(200).json({ status: "SUCCESS" });
    }
  });
});

app.listen(PORT, () => console.log(`Server Running at port: ${PORT}`));
