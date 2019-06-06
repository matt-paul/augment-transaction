const fetch = require("node-fetch")
const { URLSearchParams } = require("url")
require("dotenv-safe").config()

const accessToken = process.env.ACCESS_TOKEN
const baseURL = process.env.BASE_URL
const accountID = process.env.ACCOUNT_ID

// tx_00009iHjBTmZGWns9T4B5G

// const transactionURL = `${baseURL}/transactions/${transactionID}`

// const post = async url => {
//   try {
//     const response = await fetch(url)
//     const json = await response.json()
//     console.log(json)
//   } catch (error) {
//     console.log(error)
//   }
// }

// postAugmentedTranaction(url)

// add feedItem

// https://www.npmjs.com/package/node-fetch

const addToFeed = async () => {
  const feedURL = `${baseURL}/feed?account_id=${accountID}&type=basic`
  console.log(feedURL)

  const params = new URLSearchParams()
  params.append("params[title]", "✋Wait a minute..🌍")
  params.append(
    "params[body]",
    "Flakey Falafels has been listed by Greenspace as the most environmentally destructive falafel supplier of the last 10 years. Do you really want to support this business? "
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
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

addToFeed()

// http --form POST "https://api.monzo.com/feed" \
//     "Authorization: Bearer $access_token" \
//     "account_id=$account_id" \
//     "type=basic" \
//     "url=https://www.example.com/a_page_to_open_on_tap.html" \
//     "params[title]=My custom item" \
//     "params[image_url]=www.example.com/image.png" \
//     "params[background_color]=#FCF1EE" \
//     "params[body_color]=#FCF1EE" \
//     "params[title_color]=#333" \
//     "params[body]=Some body text to display"
