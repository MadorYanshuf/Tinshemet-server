// const server = require('../routes/incidents.ts');
// const supertest = require('supertest');
// const { beforeEach } = require('node:test');
// const requestWithSupertest = supertest(server);

// describe('get all incidents testing', () => {

//     it('GET / should show all incidents', async () => {
//       const res = await requestWithSupertest.get('/incidents');
//         expect(res.status).toEqual(200);
//         expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body.data.length >= 1).toBe(true);
//     });
  
//   });

const request = require("supertest")
const baseURL = "http://localhost:3000"

describe("GET /incidents", () => {
      it("should return 200", async () => {
        const response = await request(baseURL).get("/incidents");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(null);
      });
      it("should return incidents", async () => {
        const response = await request(baseURL).get("/incidents");
        expect(response.body.data.length >= 1).toBe(true);
      });
    });