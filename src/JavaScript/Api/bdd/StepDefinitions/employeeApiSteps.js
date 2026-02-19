import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import dotenv from 'dotenv';
import ApiUtil from '../Utils/ApiUtil.js';
import DBUtil from '../Utils/DBUtil.js';

dotenv.config();

let employeeData;
let response;
let responseBody;

Given('I set employee details with {string} {string} {string}', function (name, id, role) {
    employeeData = {
        employee_name: name,
        employee_id: id,
        job_role: role
    };
});

When('I send POST request to add employee', async function () {
    response = await ApiUtil.postEmployee(employeeData);
    responseBody = await response.json();
});

Then('the response status should be 201', function () {
    assert.strictEqual(response.status(), 201);
});

Then('the response message should be {string}', function (expectedMessage) {
    assert.strictEqual(responseBody.msg, expectedMessage);
    assert.strictEqual(responseBody.employee_id, employeeData.employee_id);
});

Then('employee should be present in database', async function () {
    const dbResult = await DBUtil.getEmployeeById(employeeData.employee_id);

    assert.ok(dbResult.length > 0);
    assert.strictEqual(dbResult[0].employee_name, employeeData.employee_name);
    assert.strictEqual(dbResult[0].job_role, employeeData.job_role);
});
