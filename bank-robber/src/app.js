import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { AuthAPIClient, DataAPIClient } from 'truelayer-client';

dotenv.config();

const app = express();

const port = 5000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const redirectUri = process.env.REDIRECT_URL;

const client = new AuthAPIClient({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

const scopes = ['info', 'accounts', 'balance', 'transactions', 'offline_access', 'cards'];

app.get('/', (req, res) => {
  try {
    const authURL = client.getAuthUrl(redirectUri, scopes, null, null, null, true);
    res.redirect(authURL);
  } catch (err) {
    console.error('🔴', err);
  }
});

app.get('/token', async (req, res) => {
  try {
    const { code } = req.query;
    const tokens = await client.exchangeCodeForToken(redirectUri, code);
    res.send(tokens);
  } catch (err) {
    console.error('🔴', err);
  }
});

app.post('/user-details', async (req, res) => {
  try {
    const { token } = req.body;
    const userDetails = await DataAPIClient.getInfo(token);
    res.send(userDetails);
  } catch (err) {
    console.error('🔴', err);
  }
});

app.listen(port);

console.log(`App is listening on port: ${port}`);
