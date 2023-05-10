const request = require("supertest");

const app = require("./app");

describe("GET /", () => {
    //navigate to root and check the the response is "Hello World!"
    it('responds with "Hello World!"', (done) => {
        console.log(request(app).get('/'));
        request(app).get('/').expect('Hello World!', done);
    });
});
