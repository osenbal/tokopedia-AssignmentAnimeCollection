import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "@/Domain/services/JWT/jwt.service";

describe("JWT service", () => {
  it("should return null if no access token is found", () => {
    expect(getAccessToken()).toBe(null);
  });

  it("should set access token", () => {
    setAccessToken("token", 1000);
    expect(getAccessToken()).toBe("token");

    removeAccessToken();
    expect(getAccessToken()).toBe(null);
  });
});
