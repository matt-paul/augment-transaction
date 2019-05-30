import { augment } from "./"

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
    note: "Wow Coffee has been given a rating of 'Evil' by Greenpeace"
  }
}

describe("augmentation", () => {
  test("augments data with a notes field", () => {
    const output = augment(transaction)
    expect(output).toEqual(augmentedTransaction)
  })
})
