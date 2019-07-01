import { DatabaseEntry } from "./types"

const generateEthicalInfo = (dbEntry: DatabaseEntry) => {
  const body = `${dbEntry.name} scored ${dbEntry.rating} on the ethical index`

  const poorRating = {
    title: "✋Wait a minute..🌍",
    bodyColour: "ff0000",
    imageURL: "https://img.icons8.com/dusk/64/000000/oil-industry.png",
  }

  const excellentRating = {
    title: "🎉 This business is worth supporting!",
    bodyColour: "008000",
    imageURL: "https://icons8.com/icon/43164/globe-earth",
  }

  const styleSelector = (rating: string) => {
    switch (rating) {
      case "1":
        return poorRating
        break
      case "5":
        return excellentRating
    }
  }

  const styles = styleSelector(dbEntry.rating)

  if (styles) {
    return {
      ...styles,
      body,
    }
  }
}

export default generateEthicalInfo
