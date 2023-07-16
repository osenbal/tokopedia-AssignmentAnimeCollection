import { getCookie, setCookie, removeCookie } from "./cookie.local.data";

describe("src/Data/Local/cookie/cookie.local.data.ts", () => {
  describe("getCookie", () => {
    it("should return null", () => {
      const result = getCookie("name");
      expect(result).toBeNull();
    });
  });

  describe("setCookie", () => {
    it("should set cookie", () => {
      setCookie("name", "value", 1000);
      const result = getCookie("name");
      expect(result).toBe("value");
    });
  });

  describe("removeCookie", () => {
    it("should remove cookie", () => {
      setCookie("name", "value", 1000);
      removeCookie("name");
      const result = getCookie("name");
      expect(result).toBeNull();
    });
  });
});
