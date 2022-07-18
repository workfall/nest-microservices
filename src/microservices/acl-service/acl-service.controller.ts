import { Controller, Get } from '@nestjs/common';
import { AclServiceService } from './acl-service.service';

@Controller('')
export class AclServiceController {
    constructor(private readonly aclService: AclServiceService) { }

    @Get()
    getAuth() {
        return this.aclService.getAuth();
    }
}
