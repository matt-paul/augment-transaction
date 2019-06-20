import generateEthicalInfo from "./generateEthicalInfo"

describe("generating ethical data", () => {
  test("returns something or other", () => {
    const dbEntry = { name: "Wow Coffee", rating: "1" }

    const expectedResult = {
      title: "✋Wait a minute..🌍",
      body: "Wow Coffee scored 1 on the ethical index",
      imageURL: "https://icons8.com/icon/43164/globe-earth",
      bodyColour: "ff0000",
    }

    const result = generateEthicalInfo(dbEntry)
    expect(result).toEqual(expectedResult)
  })
})
