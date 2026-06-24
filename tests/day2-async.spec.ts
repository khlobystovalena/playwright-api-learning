import { test } from "@playwright/test";

test("async practice", async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  )

  console.log(response.status())

  const body = await response.json()

  console.log(body)

  const {id, title} = body

  console.log(id,title)

})