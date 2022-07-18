import { Injectable } from '@nestjs/common';

@Injectable()
export class AclServiceService {
    getAuth() {
        return {
            auth: {
                tenant: "default",
                user: "admin",
            }
        };
    }
}
