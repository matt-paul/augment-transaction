import { augment } from "./"

describe("augmentation", () => {
  test("augments data with a notes field", () => {
    const transaction = {
      type: "transaction.created",
      data: {
        description: "Sainsburys"
      }
    }

    const augmentedTransaction = {
      type: "transaction.created",
      data: {
        description: "Sainsburys",
        note: "Sainsburys is rated Awesome by Carbon Trust"
      }
    }
    const output = augment(transaction)
    expect(output).toEqual(augmentedTransaction)
  })
  test("returns a 'no data' note if not in the database", () => {
    const transaction = {
      type: "transaction.created",
      data: {
        description: "Wow Coffee"
      }
    }

    const augmentedTransaction = {
      type: "transaction.created",
      data: {
        description: "Wow Coffee",
        note: "This retailer has no data yet"
      }
    }
    const output = augment(transaction)
    expect(output).toEqual(augmentedTransaction)
  })
})
