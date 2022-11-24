import supertest from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";

test("GET /users", async function () {
  const response = await supertest(app).get("/users");
  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.payload).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        twitter: expect.any(String),
        linked_in: expect.any(String),
        facebook: expect.any(String),
        slack: expect.any(String),
        email: expect.any(String),
      }),
    ])
  );
});