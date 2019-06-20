import addToFeed from "./addToFeed"
import generateEthicalInfo from "./generateEthicalInfo"
import { fancyDb } from "./fancyDB"
import { DatabaseEntry } from "./types"

export const handler = async (event: any) => {
  const transaction = JSON.parse(event.body)

  const result: DatabaseEntry | undefined = fancyDb.find(
    entry => entry.name === transaction.data.description,
  )

  if (result && result.rating === "1") {
    const ethicalInfo = generateEthicalInfo(result)
    addToFeed(ethicalInfo)
  }

  return {
    statusCode: "200",
  }
}
