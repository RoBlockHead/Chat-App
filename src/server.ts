import bodyParser from 'body-parser';
import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.on("finish", () => {
		console.log(`${req.method} - ${req.path} ${res.statusCode}`);	
	})
	next();
});
app.route('/')
	.get((req: express.Request, res: express.Response) => {
		res.sendStatus(200);
	})
	.post((req, res) => {
		res.sendStatus(400);
	});
app.route('/A')
	.get((req, res) => {
		res.sendStatus(500);
	})
