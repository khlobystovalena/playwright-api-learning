import { test } from "@playwright/test";

test("destructuring practice", async () => {
  //Задание 1

  const user = {
    id: 1,
    name: "Elena",
    age: 30,
  };

  const { id, name } = user;
  console.log(id);
  console.log(name);
});
