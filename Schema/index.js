const { makeExecutableSchema } = require("graphql-tools");
const schemaParts = [
  require("../Schema/AThinig/index"),
  require("../Schema/Query/index"),
  require("../Schema/Book/index"),
  require("../Schema/Circle/index")
];

const generateSchema = schemaParts =>
  makeExecutableSchema({
    typeDefs: schemaParts.map(part => part.typeDefs),
    resolvers: schemaParts.map(part => part.resolvers)
  });

module.exports = generateSchema(schemaParts);
