import { menu } from "./menu";
describe("Filter Industry", () => {
  test("menu", () => {
    expect(menu).toBeDefined();
  });

  test("is function", () => {
    expect(typeof menu).toBe("function");
  });


});
