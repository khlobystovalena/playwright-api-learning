import { test } from "@playwright/test";

test("arrays practice", async () => {
  const users = [
    { id: 1, name: "Kate", age: 20 },
    { id: 2, name: "Elena", age: 30 },
    { id: 3, name: "John", age: 40 },
  ];

  //Задание 1

  const result = users.find((user) => user.name === "Elena");
  console.log(result);

  //Задание 2

  const result2 = users.filter((user) => user.age > 25);
  console.log(result2);

  //Задание 3

  const result3 = users.map((user) => user.name);
  console.log(result3);

  //Задание 4

  const result4 = users.map(user => ({ name: user.name }))
  console.log(result4);


  //Задание 5

  const result5 = users.filter(user => user.age > 20).map(user => user.name.toUpperCase())
  console.log(result5)
});






