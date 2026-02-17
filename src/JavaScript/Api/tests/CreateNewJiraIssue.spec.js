import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

test('Create Jira Issue - POST API', async ({ request }) => {

    // Read request body from external file
    const requestBody = JSON.parse(
        fs.readFileSync('./src/JavaScript/Api/Resources/JiraIssueRequestBody.json', 'utf-8')
    );

    // Send POST request
    const response = await request.post(
        'https://ratnakarkolhatkar-1771315575722.atlassian.net/rest/api/3/issue',
        {
            headers: {
                'Authorization': process.env.JIRA_AUTH,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: requestBody
        }
    );

    // Validate status code
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log('Response:', responseBody);

    // Validate response structure
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('key');
    expect(responseBody).toHaveProperty('self');

    // Validate project key format
    expect(responseBody.key).toContain('SCRUM-');

    // Validate self URL
    expect(responseBody.self).toContain('/rest/api/3/issue/');
});
