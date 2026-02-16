// To run this test, use the command: npx playwright test StandAloneApiTest.spec.js
// To run this test with HTML report: npx playwright test StandAloneApiTest.spec.js --reporter=html
// src/JavaScript/Api/tests/StandAloneApiTest.spec.js
// Import Playwright test module
// test -> used to define test cases
// expect -> used for assertions
// request -> used to make API calls without browser
import { test, expect, request } from '@playwright/test';

// -----------------------------------------------
// 1️⃣ GET API Test Example
// -----------------------------------------------
test('GET - Fetch all posts from JSONPlaceholder', async ({ request }) => {

    // Sending GET request to public demo API
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts'
    );

    // Verify HTTP status code is 200 (Success)
    expect(response.status()).toBe(200);

    // Convert response body to JSON
    const responseBody = await response.json();

    // Print first object in response for demo visibility
    console.log("First Post:", responseBody[0]);

    // Validate response contains at least 1 record
    expect(responseBody.length).toBeGreaterThan(0);

    // Validate specific property exists in response
    expect(responseBody[0]).toHaveProperty('title');
});


// -----------------------------------------------
// 2️⃣ POST API Test Example
// -----------------------------------------------
test('POST - Create new post in JSONPlaceholder', async ({ request }) => {

    // Define request payload (Body)
    const payload = {
        title: 'Playwright API Testing',
        body: 'This is created during training session',
        userId: 1
    };

    // Send POST request
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: payload // attaching JSON body
        }
    );

    // Validate HTTP Status Code (201 = Created)
    expect(response.status()).toBe(201);

    // Convert response to JSON
    const responseBody = await response.json();

    // Print created response
    console.log("Created Post:", responseBody);

    // Validate response fields
    expect(responseBody.title).toBe(payload.title);
    expect(responseBody.body).toBe(payload.body);
});


// -----------------------------------------------
// 3️⃣ DELETE API Test Example
// -----------------------------------------------
test('DELETE - Remove a user from ReqRes API', async ({ request }) => {

    // Sending DELETE request
    // ReqRes supports delete simulation
    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Expected response code for successful delete = 204 (No Content)
    expect(response.status()).toBe(200);

    console.log("User Deleted Successfully - Status:", response.status());
});

// const { test, expect, request } = require('@playwright/test');

test('Independent API Context Example', async () => {

    // Create new API request context manually
    const apiContext = await request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com'
    });

    const response = await apiContext.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    await apiContext.dispose(); // Clean up context
});
