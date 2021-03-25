import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { BindOptions } from 'node:dgram';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/payload')
  getWebhook(@Req() request: Request): Request {
    return request;
  }
  

}