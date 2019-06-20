import { URLSearchParams } from "url"
import fetch from "node-fetch"
import { Transaction } from "./types"

const accessToken = process.env.ACCESS_TOKEN
const baseURL = process.env.BASE_URL
const accountID = process.env.ACCOUNT_ID

const searchParams = new URLSearchParams()

const addToFeed = async (
  transaction: Transaction,
  fetchFn = fetch,
  params = searchParams,
) => {
  const feedURL = `${baseURL}/feed?account_id=${accountID}&type=basic`

  const title = "✋Wait a minute..🌍"
  const body = `${transaction.data.description} is a highly unethical retailer`
  const imageURL = "https://icons8.com/icon/43164/globe-earth"
  const bodyColour = "ff0000"

  params.append("params[title]", title)
  params.append("params[body]", body)
  params.append("params[image_url]", imageURL)
  params.append("params[body_color]", bodyColour)

  try {
    const response = await fetchFn(feedURL, {
      method: "post",
      body: params,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export default addToFeed
