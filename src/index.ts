import addToFeed from "./addToFeed"
import { fancyDb } from "./fancyDB"

export const handler = async (event: any) => {
  const transaction = JSON.parse(event.body)

  const result = fancyDb.find(
    entry => entry.name === transaction.data.description
  )

  if (result) {
    addToFeed(transaction)
  }

  return {
    statusCode: "200"
  }
}
