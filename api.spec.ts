import { test, expect } from "@playwright/test";
import exp from "constants";

test("GET /products", async ({ request }) => {
  //baseURL
  const apiUrl = "https://api.practicesoftwaretesting.com";
  // saving response
  const response = await request.get(apiUrl + "/products");

  //validation
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.length).toBe(9);
  expect(body.total).toBe(50);
});

test("POSTS /users/login", async ({ request }) => {
  //baseURL
  const apiUrl = "https://api.practicesoftwaretesting.com";
  // saving response
  const response = await request.post(apiUrl + "/users/login",{
    data :{
      email: "customer2@practicesoftwaretesting.com",
      password: "welcome01"},

  });
      
  //validation
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy(); //(i.e., not null, undefined, false, 0, '', or NaN).
});
