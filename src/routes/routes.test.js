const request = require("supertest");
const router = require("./routes")();
const app = require("express")();

app.use(router);

describe("Test the root path", () => {
  it("Response Introducing test", done => {
    request(app)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
  test("Response Searching test", done => {
    request(app)
      .get("/search?title=avengers")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
  test("Response Showing test", done => {
    request(app)
      .get("/show")
      .then(res => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.status).toBe(200);
        done();
      });
  });
  test("Response ID test", done => {
    request(app)
      .get("/id?id=11053")
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
  test("Response Sorting test", done => {
    request(app)
      .get("/sort?field=title&direction=l")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
  test("Response Pagination test", done => {
    request(app)
      .get("/page?offset=50&limit=5")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
});
