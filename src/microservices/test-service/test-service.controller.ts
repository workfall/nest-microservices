import { Controller, Get } from '@nestjs/common';
import Axios from 'axios';

@Controller('')
export class TestServiceController {
    constructor() { }

    @Get()
    async getAuth() {
        try {
            const res = await Axios.get('http://acl-service:3001');

            return res.data;
        } catch (error) {
            return error.response;
        } 
    }

    @Get('health')
    async health() {
        return {
            health: 'OK'
        };
    }
}
