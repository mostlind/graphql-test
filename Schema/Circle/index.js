const { join } = require("path");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(join(__dirname, "Circle.graphql")).toString();

module.exports = {
  typeDefs,
  resolvers: {}
};
