import {Given, When, Then} from "@cucumber/cucumber"
import apiTesting from "../pages/apiTesting"
import {chromium, Page, Browser, expect, request} from "@playwright/test"
const axios = require('axios');

const apidata = require("../fixture/apiTesting")
let browser: Browser
let pages: Page

Given('The api is up and running',  async function () {
  this.response = await axios.post({
    url: apiTesting.api_token,
    data: {
        "UserAccount": apidata.Username,
        "Password": apidata.Password
    }
})
  expect(this.response.status()).toBe(200)
})

When('I get menu list', async function() {
  // Write code here that turns the phrase above into concrete actions
})

Then('The menu list should be response successfully with correct schema', async function() {
  // Write code here that turns the phrase above into concrete actions
})

Then('The menu list should be response successfully with status code {int}', async function (int: number) {
  // Write code here that turns the phrase above into concrete actions
})
