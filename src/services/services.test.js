const getServices = require("./services");
const fs = require("fs");
const films = JSON.parse(fs.readFileSync("data.json", "utf8"));

test("SHOWING ALL FILMS", () => {
  expect(getServices.showService()).toEqual(films.map(item => item.title));
});

test("SEARCH FILM", () => {
  expect(getServices.searchService("what about dick")).toEqual([
    "What About Dick?"
  ]);
  expect(getServices.searchService("lords of chaos")).toEqual([
    "Lords of Chaos"
  ]);
  expect(getServices.searchService("miss hokusai")).toEqual(["Miss Hokusai"]);
});

test("PAGENATION", () => {
  expect(getServices.pageService(50, 5)).toEqual([
    "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Unfriended: Dark Web",
    "I Feel Pretty",
    "Uncle Drew",
    "Papillon"
  ]);
});

test("SORTING", () => {
  expect(getServices.sortService("title", "l")).toEqual(
    films
      .sort((a, b) => {
        return String(a["title"]).localeCompare(String(b["title"]));
      })
      .map(item => item.title)
  );
  expect(getServices.sortService("title", "r")).toEqual(
    films
      .sort((a, b) => {
        return String(b["title"]).localeCompare(String(a["title"]));
      })
      .map(item => item.title)
  );
});

test("SEARCH FILM BY ID", () => {
  expect(getServices.idService(20015)).toEqual(["KM 31: Kilometer 31"]);
});
