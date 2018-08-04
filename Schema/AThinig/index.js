const { join } = require("path");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(join(__dirname, "AThing.graphql")).toString();

const delayedResolve = (value, ms) =>
  new Promise((res, rej) => {
    setTimeout(() => res(value), ms);
  });

const AThing = {
  name: () => "cool",
  numbers: () => delayedResolve([1, 2, 3], 1000),
  book: () => ({
    title: "book title",
    pages: 4
  })
};

module.exports = {
  typeDefs,
  resolvers: {
    AThing
  }
};
