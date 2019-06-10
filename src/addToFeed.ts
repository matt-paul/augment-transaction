const { URLSearchParams } = require("url")
import fetch from "node-fetch"
import { Transaction } from "./types"

const accessToken = process.env.ACCESS_TOKEN
const baseURL = process.env.BASE_URL
const accountID = process.env.ACCOUNT_ID

const addToFeed = async (transaction: Transaction) => {
  const feedURL = `${baseURL}/feed?account_id=${accountID}&type=basic`
  console.log(feedURL)

  const params = new URLSearchParams()
  params.append("params[title]", "✋Wait a minute..🌍")
  params.append(
    "params[body]",
    `${transaction.data.description} is a highly unethical retailer`
  )
  params.append(
    "params[image_url]",
    "https://icons8.com/icon/43164/globe-earth"
  )
  params.append("params[body_color]", "ff0000")

  try {
    const response = await fetch(feedURL, {
      method: "post",
      body: params,
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export default addToFeed
