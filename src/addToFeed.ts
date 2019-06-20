import { URLSearchParams } from "url"
import fetch from "node-fetch"
import { EthicalInfo } from "./types"

const accessToken = process.env.ACCESS_TOKEN
const baseURL = process.env.BASE_URL
const accountID = process.env.ACCOUNT_ID

const searchParams = new URLSearchParams()

const addToFeed = async (
  ethicalInfo: EthicalInfo,
  fetchFn = fetch,
  params = searchParams,
) => {
  const feedURL = `${baseURL}/feed?account_id=${accountID}&type=basic`

  params.append("params[title]", ethicalInfo.title)
  params.append("params[body]", ethicalInfo.body)
  params.append("params[image_url]", ethicalInfo.imageURL)
  params.append("params[body_color]", ethicalInfo.bodyColour)

  try {
    await fetchFn(feedURL, {
      method: "post",
      body: params,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  } catch (error) {
    throw new Error(error)
  }
}

export default addToFeed
