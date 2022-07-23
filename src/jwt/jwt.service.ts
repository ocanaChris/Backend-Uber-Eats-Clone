import { Global, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtModuleOptions } from './jwt.interface';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { ConfigService } from 'aws-sdk';


@Injectable()
@Global()

export class JwtService {
     constructor(
        @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions) 
        {}

        sign(userId: number) : string {
          return jwt.sign({ id : userId }, this.options.privateKey);
        }

        verify(token: string ) {
          return jwt.verify(token, this.options.privateKey);
        }
}
