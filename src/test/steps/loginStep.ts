import {Given, When, Then} from "@cucumber/cucumber"
import loginPage from "../pages/loginPage";
import {chromium, Page, Browser, expect} from "@playwright/test"

const logindata = require("../fixture/login")

let browser: Browser
let pages: Page

Given('Launch the browser', async function () {
  browser = await chromium.launch({headless : false})
  const context = await browser.newContext({
    viewport: {width: 1512, height: 982} // Launch browser in full-screen mode
  });
  pages = await context.newPage()
  await pages.goto(loginPage.baseUrl)
  //implicit wait
  await pages.waitForTimeout(2000)
});


When('I input {string} and {string}', async function (username, password) {
  await pages.locator(loginPage.username).type(username)
  await pages.locator(loginPage.password).fill(password)
  await pages.locator(loginPage.loginBtn).click()
  await pages.waitForTimeout(1000)
})

Then('Homepage is displayed correctly', async function() {
  const account_name = await pages.locator(loginPage.accountName)
  //Check element visible case 1
  account_name.isVisible()
  //Check element visible case 2
  await expect(account_name).toBeVisible()
})

Then('Verify the username is displayed correctly', () => {
  // Write code here that turns the phrase above into concrete actions
})
Then('Close browser', async function(){
  await browser.close()
})
When('I input username and password', async function() {
  await pages.locator(loginPage.username).type(logindata.userName)
  await pages.locator(loginPage.password).fill(logindata.passWord)
  await pages.locator(loginPage.loginBtn).click()
  await pages.waitForTimeout(1000)
})
