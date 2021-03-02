import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@rbh01.fm2l3.mongodb.net/ChatApp?retryWrites=true&w=majority`);
export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
	console.log('Connected to Mongo Database!');
});