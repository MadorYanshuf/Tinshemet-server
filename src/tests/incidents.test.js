const request = require("supertest");
const app = require("../server");
const GOOD_STATUS= 200;

describe("get all incidents", () =>
    it("It should response the GET method", async () => {
        const response = await request('http://localhost:8000').get('/incidents/');
        expect(response.statusCode).toBe(GOOD_STATUS);
        expect(response.body.length).toBeGreaterThan(0);
    })
);
