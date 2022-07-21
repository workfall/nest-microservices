import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthcheckServiceController {
    @Get()
    public getHealthcheck(): string {
        return 'OK';
    }
}
