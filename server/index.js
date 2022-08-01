import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";


const app = express();
dotenv.config();
const {
	EMAIL_HOST,
	EMAIL_HOST_PASSWORD,
	EMAIL_HOST_USER,
	EMAIL_PORT
} = process.env;

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
	let { data, randomNumber } = req.body;
	console.log(data, randomNumber)
	const transport = nodemailer.createTransport({
		host: EMAIL_HOST,
		port: EMAIL_PORT,
		secure: true,
		auth: {
			user: EMAIL_HOST_USER,
			pass: EMAIL_HOST_PASSWORD
		}
	});

	await transport.sendMail({
		from: EMAIL_HOST_USER,
		to: data.email,
		subject: "Тестовое задание, заказ №000000",
		text: `${data.name}, заказ №000000 сформирован. В ближайшее время наш специалист свяжется с вами по телефону ${data.phone}.`
	});
})

app.listen(PORT, () => {
	console.log("Server is listening on port 4000")
})
