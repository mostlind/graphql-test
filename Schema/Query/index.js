const { join } = require("path");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(join(__dirname, "Query.graphql")).toString();

const Query = {
  hello: () => "hello world",
  world: () => ({
    title: "something"
  }),
  circle: (parent, { radius }) => ({
    center: {
      x: Math.random(),
      y: Math.random()
    },
    radius
  })
};

module.exports = {
  typeDefs,
  resolvers: {
    Query
  }
};
