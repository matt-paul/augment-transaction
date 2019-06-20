import { DatabaseEntry } from "./types"

const generateEthicalInfo = (dbEntry: DatabaseEntry) => {
  const title = "✋Wait a minute..🌍"
  const body = `${dbEntry.name} scored ${dbEntry.rating} on the ethical index`
  const styling = {
    bodyColour: "ff0000",
    imageURL: "https://icons8.com/icon/43164/globe-earth",
  }

  return {
    ...styling,
    body,
    title,
  }
}

export default generateEthicalInfo
