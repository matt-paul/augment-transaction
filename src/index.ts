import addToFeed from "./addToFeed"
import generateEthicalInfo from "./generateEthicalInfo"
import { fancyDb } from "./fancyDB"
import { DatabaseEntry } from "./types"

export const handler = async (event: any) => {
  const transaction = JSON.parse(event.body)

  const result: DatabaseEntry | undefined = fancyDb.find(
    entry => entry.name === transaction.data.description,
  )

  if (result) {
    const ethicalInfo = generateEthicalInfo(result)
    try {
      ethicalInfo && (await addToFeed(ethicalInfo))
    } catch (error) {
      console.log(error)
    }
  }
}
