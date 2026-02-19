import { request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

class ApiUtil {

    static async postEmployee(employeeData) {
        const apiContext = await request.newContext({
            baseURL: process.env.APP_BASE_URL
        });

        const response = await apiContext.post('/api/addEmployee', {
            data: employeeData,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response;
    }
}

export default ApiUtil;
