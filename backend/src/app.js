import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
