const {
  searchFilms,
  Page,
  Sort,
  getId,
  getFilms
} = require("../controllers/controllers");

describe("TESTING CONTROLLERS TO EXIST", () => {
  test("SEARCH CONTROLLER", () => {
    expect(searchFilms).toBeDefined();
  });
  test("PAGENATION CONTROLLER", () => {
    expect(Page).toBeDefined();
  });
  test("SORT CONTROLLER", () => {
    expect(Sort).toBeDefined();
  });
  test("ID CONTROLLER", () => {
    expect(getId).toBeDefined();
  });
  test("SHOWING CONTROLLER", () => {
    expect(getFilms).toBeDefined();
  });
});
