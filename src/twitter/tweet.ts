import dotenv from 'dotenv';
import { post } from './client';

dotenv.config();
export const tweet = async function (tweet: string) {
  const oAuthConfig = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_ACCESS_TOKEN,
    token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  };
  try {
    await post({
      url: 'https://api.twitter.com/1.1/statuses/update.json?status=' + tweet,
      options: {
        oauth: oAuthConfig,
      },
    });
  } catch (err) {
    console.error('error2', err);
    throw new Error('ERROR');
  }
};
