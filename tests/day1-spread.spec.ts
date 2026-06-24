import { test } from "@playwright/test";

test("spread practice", async () => {
  //Задание 1

  const defaultUser = {
    role: "user",
    active: true,
    country: "RU",
  };

  const adminUser = {
    ...defaultUser,
    role: "admin",
  };

  //Задание 2

  const inactiveUser = {
    ...defaultUser,
    active: false,
  };

  console.log(defaultUser);
  console.log(adminUser);
  console.log(inactiveUser);
});
