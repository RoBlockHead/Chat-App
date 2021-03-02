import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: String,
	passhash: String,
	created: Date,
	lastSeen: Date,
	email: String,
}, { collection: 'users' });

export const User = mongoose.model('User', UserSchema);

const MessageSchema = new mongoose.Schema({
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	content: String,
	created: Date,
	channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
}, { collection: 'messages' });

export const Message = mongoose.model('Message', MessageSchema);

const ChannelSchema = new mongoose.Schema({
	name: String,
	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, { collection: 'channels' });

export const Channel = mongoose.model('Channel', ChannelSchema);
