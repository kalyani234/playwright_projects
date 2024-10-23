// require - node.js build-in function used to load modules in separate files 
//we are using "require" to load the test and except
 const {test, expect}= require('@playwright/test')
// const{hello,helloworld}=require('./demo/hello')
// import { hello,helloworld } from "./demo/hello"
//  console.log("function 1: " + hello());
//  console.log("function 2: " + helloworld());

test('My first test',async({page}) =>{
   await page.goto("https://google.com")
   await expect(page).toHaveTitle('Google')
}) 
