import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {app} from './server';
import {db} from './database';

app.listen(process.env.PORT, () => {
	console.log("Listening on port " + process.env.PORT);
});