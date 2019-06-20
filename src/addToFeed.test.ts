import addToFeed from "./addToFeed"

describe("addToFeed", () => {
  test("appending params", () => {
    const transaction = {
      type: "transaction.created",
      data: { id: "tx_111", description: "Wow Coffee" },
    }

    const fetchMock = jest.fn()
    const params = {
      append: jest.fn(arg => undefined),
    }

    //@ts-ignore
    addToFeed(transaction, fetchMock, params)

    expect(params.append).toHaveBeenCalledWith(
      "params[title]",
      "✋Wait a minute..🌍",
    )
    expect(params.append).toHaveBeenCalledWith(
      "params[body]",
      "Wow Coffee is a highly unethical retailer",
    )
    expect(params.append).toHaveBeenCalledWith(
      "params[image_url]",
      "https://icons8.com/icon/43164/globe-earth",
    )
    expect(params.append).toHaveBeenCalledWith("params[body_color]", "ff0000")
  })

  test("calling fetch function", () => {
    const transaction = {
      type: "transaction.created",
      data: { id: "tx_111", description: "Wow Coffee" },
    }

    const fetchMock = jest.fn()
    const params = {
      append: jest.fn(arg => undefined),
    }

    //@ts-ignore
    addToFeed(transaction, fetchMock, params)

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("feed?account_id"),
      {
        method: "post",
        body: params,
        headers: { Authorization: "Bearer undefined" },
      },
    )
  })
})
