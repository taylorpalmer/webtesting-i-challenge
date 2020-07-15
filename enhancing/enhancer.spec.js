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
    expect(
      enhancer.fail({
        name: "string",
        durability: 100,
        enhancement: 19,
      })
    ).toEqual({
      name: "string",
      durability: 90,
      enhancement: 18,
    });
    expect(
      enhancer.fail({ name: "string", durability: 51, enhancement: 10 })
    ).toEqual({ name: "string", durability: 46, enhancement: 10 });
    expect(
      enhancer.fail({ name: "string", durability: 0, enhancement: 0 })
    ).toEqual({ name: "string", durability: 0, enhancement: 1 });
    expect(
      enhancer.fail({ name: "string", durability: 100, enhancement: 15 })
    ).toEqual({ name: "string", durability: 90, enhancement: 15 });
  });
});
