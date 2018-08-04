GraphQL Schema

**_ this file is generated automatically _**

```typescript
type AThing {
  name: String
  numbers: [Int]
  title: String
  book: Book
}

type Book {
  id: Int
  thing: AThing
  title: String
  pages: Int
}

type Circle {
  center: Point
  radius: Float
}

type Point {
  x: Float
  y: Float
}

type Query {
  hello: String
  world: AThing
  circle(radius: Float): Circle
}
```
