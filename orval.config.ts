import { defineConfig } from "orval"

export default defineConfig({
  everform: {
    output: {
      mode: "tags",
      target: "./api/generated",
      schemas: "./api/generated/models",
      client: "react-query",
      prettier: true,
      override: {
        operationName: (operation, route, verb) => {
          return (
            verb +
            route
              .split("/")
              .filter((word) => !!word)
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join("")
          )
        },
      },
    },
    input: {
      target: "./api-docs.yaml",
    },
  },
})
