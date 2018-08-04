const { graphql, printSchema } = require("graphql");
const { writeFile } = require("fs");
const { join } = require("path");
const schema = require("./Schema");
const express = require("express");
const graphqlHTTP = require("express-graphql");

const port = 8080;

const generateSchemaMd = schema =>
  `
GraphQL Schema
*** this file is generated automatically ***
\`\`\`typescript
${schema}
\`\`\`
`;

writeFile(
  join(__dirname, "schema.md"),
  generateSchemaMd(printSchema(schema)),
  err => {
    if (err) {
      console.log(err.toString());
    }
  }
);

express()
  .use(
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
  .listen(port, () => console.log(`listening on port ${port}...`));
