const { Query } = require("./index").resolvers;

describe("Query Resolvers", () => {
  describe("hello resolver", () => {
    it('should return "hello world"', () => {
      expect(Query.hello()).toBe("hello world");
    });
  });
  describe("world resolver", () => {
    it('should return an object with a property title, and a value of "something"', () => {
      expect(Query.world()).toEqual({ title: "something" });
    });
  });
  describe("circle resolver", () => {
    it("should return a circle", () => {
      const {
        center: { x, y },
        radius
      } = Query.circle(null, { radius: 4 });

      expect(radius).toBe(4);
      expect(x).toBeLessThan(1);
      expect(y).toBeLessThan(1);
    });
  });
});
