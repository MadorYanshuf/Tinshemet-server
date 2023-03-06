// const server = require('../routes/incidents.ts');
// const supertest = require('supertest');

// const requestWithSupertest = supertest(server);

// describe('get all incidents testing', () => {

//     it('GET / should show all incidents', async () => {
//         const res = await requestWithSupertest.get('/incidents');
//         expect(res.status).toEqual(200);
//         expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body.data.length >= 1).toBe(true);
//     });

// });

const request = require("supertest");
const app = require("../server");
jest.setTimeout(30000);
describe("Test the root path", () => {
    test("It should response the GET method", (done) => {
        request(app).get("/incidents").expect(200, done);
        console.log("hello");
        // expect("100").toEqual("100");
    });
});
