import generateEthicalInfo from "./generateEthicalInfo"

describe("generating ethical data", () => {
  test("Generates object for a business with a very poor rating", () => {
    const dbEntry = { name: "Wow Coffee", rating: "1" }

    const expectedResult = {
      title: "✋Wait a minute..🌍",
      body: "Wow Coffee scored 1 on the ethical index",

      imageURL: "https://img.icons8.com/dusk/64/000000/oil-industry.png",
      bodyColour: "ff0000",
    }

    const result = generateEthicalInfo(dbEntry)
    expect(result).toEqual(expectedResult)
  })

  test("Generates object for a business with an excellent rating", () => {
    const dbEntry = { name: "The Ethical Sock Company", rating: "5" }

    const expectedResult = {
      title: "🎉 This business is worth supporting!",
      body: "The Ethical Sock Company scored 5 on the ethical index",
      imageURL: "https://icons8.com/icon/43164/globe-earth",
      bodyColour: "008000",
    }

    const result = generateEthicalInfo(dbEntry)
    expect(result).toEqual(expectedResult)
  })

  test("Return undefined if the rating is not of interest", () => {
    const dbEntry = { name: "Yam and Yetis", rating: "3" }
    expect(generateEthicalInfo(dbEntry)).toBeUndefined()
  })
})
