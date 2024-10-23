import { test, expect } from '@playwright/test'
import exp from 'constants'

test('API GET test', async ({ request }) => {

    //send a get API and the response store it in a variable

    // FAKE API : https://reqres.in/
    const response = await request.get("https://reqres.in/api/users?page=2")
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain("Michael");
    console.log(await response.json());

})

test('POST request', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    })

    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe("Created")
    const text = await response.text();
    expect(text).toContain("leader");
    console.log(await response.json());
})

test('PUT request', async ({ request }) => {

    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })

    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe("OK")
    const text = await response.text();
    expect(text).toContain("zion resident");
    console.log(await response.json());
})

test.only('delete request', async ({ request }) => {

    const response = await request.delete("https://reqres.in/api/users/2")

    expect(response.status()).toBe(204)
    expect(response.statusText()).toBe("No Content")
})
