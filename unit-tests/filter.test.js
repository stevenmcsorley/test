import { filter } from "../src/js/filter/filter";

document.addEventListener = jest.fn();

describe("Filter Industry", () => {
  const documentClickEvent = new Event("change");

  test("should be defined", () => {
    expect(filter).toBeDefined();
  });

  test("should be a function", () => {
    expect(typeof filter).toBe("function");
  });

  test("should call query slector", () => {
    const spyFunc = jest.fn();
    Object.defineProperty(global.document, "querySelector", { value: spyFunc });
    filter();
    expect(spyFunc).toHaveBeenCalled();
  });

  test("should call query selector all", () => {
    const spyFunc = jest.fn();
    Object.defineProperty(global.document, "querySelectorAll", { value: spyFunc });
    filter();
    expect(spyFunc).toHaveBeenCalled();
  }); 



});
