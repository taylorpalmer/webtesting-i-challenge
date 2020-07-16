const enhancer = require("./enhancer.js");

describe("enhancer unit tests", () => {
  it("repairs", () => {
    expect(
      enhancer.repair({ name: "string", durability: 100, enhancement: 20 })
    ).toEqual({ name: "string", durability: 100, enhancement: 20 });
    expect(
      enhancer.repair({ name: "string", durability: 50, enhancement: 10 })
    ).toEqual({ name: "string", durability: 100, enhancement: 10 });
    expect(
      enhancer.repair({ name: "string", durability: 0, enhancement: 0 })
    ).toEqual({ name: "string", durability: 100, enhancement: 0 });
  });

  it("succeeds", () => {
    expect(
      enhancer.succeed({ name: "string", durability: 100, enhancement: 20 })
    ).toEqual({ name: "string", durability: 100, enhancement: 20 });
    expect(
      enhancer.succeed({ name: "string", durability: 51, enhancement: 10 })
    ).toEqual({ name: "string", durability: 51, enhancement: 11 });
    expect(
      enhancer.succeed({ name: "string", durability: 0, enhancement: 0 })
    ).toEqual({ name: "string", durability: 0, enhancement: 1 });
  });

  it("fails", () => {
    // expect(enhancer.fail(item1)).toEqual({
    //   ...item1,
    //   durability: 90,
    //   enhancement: 18,
    // });
    expect(enhancer.fail(item2)).toEqual({
      ...item2,
      durability: 46,
      enhancement: 10,
    });
    expect(enhancer.fail(item3)).toEqual({
      ...item3,
      durability: 0,
      enhancement: 1,
    });
    expect(enhancer.fail(item4)).toEqual({
      ...item4,
      durability: 90,
      enhancement: 15,
    });
  });
});

const item1 = {
  name: "string",
  durability: 100,
  enhancement: 19,
};
const item2 = {
  name: "string",
  durability: 51,
  enhancement: 10,
};
const item3 = {
  name: "string",
  durability: 0,
  enhancement: 0,
};
const item4 = {
  name: "string",
  durability: 100,
  enhancement: 15,
};
