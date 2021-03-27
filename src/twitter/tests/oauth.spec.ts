import { Test, TestingModule } from '@nestjs/testing';
import { oauth } from '../oauth';
import dotenv from 'dotenv';
dotenv.config();

describe('Twitter OAuth', () => {
  const options = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_ACCESS_TOKEN,
    token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  };
  const method: string = 'POST';
  const url: string =
    'https://api.twitter.com/1.1/statuses/update.json?status=';

  describe('auth', () => {
    it('should return ', () => {
      expect(oauth(url, method, { oauth: options }, {})).toBeDefined();
    });
  });
});
