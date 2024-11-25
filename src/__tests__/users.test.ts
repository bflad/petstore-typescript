/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Petstore } from "../index.js";

test("Users Create User", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  const result = await petstore.users.create({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
  expect(result).toBeDefined();
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("Users Create Users With List Input", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  const result = await petstore.users.createWithList([
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);
  expect(result).toBeDefined();
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("Users Login User", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  const result = await petstore.users.login({});
  expect(result).toBeDefined();
  expect(result).toBeDefined();
  expect(result).toEqual("<value>");
});

test("Users Logout User", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  await petstore.users.logout();
});

test("Users Get User By Name", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  const result = await petstore.users.getByUsername({
    username: "Zachery_Lubowitz15",
  });
  expect(result).toBeDefined();
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("Users Update User", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  await petstore.users.update({
    username: "Dandre_Hand41",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });
});

test("Users Delete User", async () => {
  const petstore = new Petstore({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  const result = await petstore.users.delete({
    username: "Demetris_Schmitt",
  });
  expect(result).toBeDefined();
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});
