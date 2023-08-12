import {Given, When, Then} from "@cucumber/cucumber"
import apiTesting from "../pages/apiTesting"
import {chromium, Page, Browser, expect, request} from "@playwright/test"
const axios = require('axios');
 
const apidata = require("../fixture/apiTesting")
let browser: Browser
let pages: Page

Given('The api is up and running',  async function () {
  //route api token
  this.routeApiResponse = await axios.post(
    apiTesting.base_url+ apiTesting.api_signin,
    {
      username: apidata.username,
      password: apidata.password,
      type: apidata.type
    }
    )
  expect(this.routeApiResponse.status).toBe(200)
  // console.log(this.routeApiResponse.data.data[0].bearerToken)
  this.token = this.routeApiResponse.data.data[0].bearerToken
})

When('I get list bank', async function() {
  // console.log(`Bearer ${token}`)
  this.accessTokenResponse = await axios.get(
    apiTesting.base_url + apiTesting.get_listbank,
    {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
  )
})

Then('Verify list bank api repsonse correctly with sucess status', async function() {
  expect(this.accessTokenResponse.status).toBe(200)
  // console.log(this.accessTokenResponse.data)
})
