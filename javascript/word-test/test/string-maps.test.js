const MAP = require("../js/string-maps.js");

const map = new Map();
map.set("a", 1);
map.set("b", 1);
map.set("c", 1);

const map2 = new Map();
map2.set("a", 1);
map2.set("b", 1);
map2.set("c", 1);

test("create sentence map", () => {
    expect(MAP.createMap("abc")).toEqual(map)
});

test("create sentence map with spaces", () => {
    expect(MAP.createMap("a b c")).not.toEqual(map)
});

test("create sentence map with spaces", () => {
    expect(MAP.createMap("a b c".replace(/ /g, ""))).toEqual(map)
});

test("validate map", () => {
    const map2 = new Map();
    map2.set("a", 1);
    map2.set("b", 1);
    map2.set("c", 1);
    expect(MAP.validateMap(map, map2)).toBe(true);
});

test("validate map", () => {
    const map2 = new Map();
    map2.set("a", 1);
    map2.set("b", 1);
    expect(MAP.validateMap(map, map2)).toBe(true);
});

test("validate map", () => {
    const map2 = new Map();
    map2.set("a", 1);
    map2.set("b", 1);
    map2.set("d", 1);
    expect(MAP.validateMap(map, map2)).not.toBe(true);
});

test("validate map", () => {
    const map2 = new Map();
    map2.set("a", 2);
    map2.set("b", 1);
    expect(MAP.validateMap(map, map2)).not.toBe(true);
});
