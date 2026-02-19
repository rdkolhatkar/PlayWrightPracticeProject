import { createConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class DBUtil {

    static async getConnection() {
        return await createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT), // ✅ safer
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }

    static async getEmployeeById(employeeId) {
        const connection = await this.getConnection();

        const [rows] = await connection.execute(
            'SELECT * FROM employeedetails WHERE employee_id = ?',
            [employeeId]
        );

        await connection.end();
        return rows;
    }

    static async deleteAllEmployees() {
    const connection = await this.getConnection();

    await connection.execute('TRUNCATE TABLE employeedetails');

    await connection.end();
}

}

export default DBUtil;
