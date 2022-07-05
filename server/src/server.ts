import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

const router = express.Router();

dotenv.config();

const PORT = process.env.PORT || 5000;
const EMAIL = process.env.USER_EMAIL || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  next();
});

app.use("/", router);

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

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
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
