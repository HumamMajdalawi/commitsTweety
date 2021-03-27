import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { tweet } from './twitter/tweet';

interface commit {
  message: string;
}

@Controller()
export class AppController {
  @Post()
  getWebhook(@Req() request: Request): any {
    this.passToTwitter({ message: request.body.head_commit.message });
  }

  passToTwitter(commit: commit) {
    tweet(commit.message);
  }
}
