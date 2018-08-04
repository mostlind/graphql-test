const { join } = require("path");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(join(__dirname, "Book.graphql")).toString();

const Book = {
  thing: book => ({
    title: "woot",
    book
  })
};

module.exports = {
  typeDefs,
  resolvers: {
    Book
  }
};
