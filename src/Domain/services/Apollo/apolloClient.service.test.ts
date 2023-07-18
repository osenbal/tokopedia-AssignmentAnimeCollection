import client from "@/Domain/services/Apollo/ApolloClient.service";

describe("Apollo client service", () => {
  it("should return apollo client", () => {
    expect(client).toBeTruthy();
  });
});
