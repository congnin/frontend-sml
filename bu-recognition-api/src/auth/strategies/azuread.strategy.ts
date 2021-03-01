import { BearerStrategy } from 'passport-azure-ad';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { adConfig } from '../../config';

@Injectable()
export class AzureAdStrategy extends PassportStrategy(BearerStrategy, 'azure-ad') {
  constructor() {
    super(adConfig)
  }

  async validate(payload: any) {
    return(payload);    
  }
}
