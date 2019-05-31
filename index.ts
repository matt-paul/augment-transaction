const getEnviroCertificate = (retailer: string) => {
  const fancyDb = [
    {
      name: "Sainsburys",
      rating: "Awesome"
    },
    {
      name: "PayPal",
      rating: "Not good"
    }
  ]

  const result = fancyDb.find(entry => entry.name === retailer)
  if (result) {
    return `${result.name} is rated ${result.rating} by Carbon Trust`
  }
  return `This retailer has no data yet`
}

export const augment = (body: any) => {
  const data = {
    ...body.data,
    note: getEnviroCertificate(body.data.description)
  }
  return { ...body, data }
}

export const handler = async (event: any) => {
  const body = JSON.parse(event.body)

  const accessToken = process.env.ACCESS_TOKEN
  const baseURL = process.env.BASE_URL
  const transactionID = body.data.id

  {
    {
      base_url
    }
  }
  ;/transactions/00004599BBGGHTTWZ_ijmnstx
  //
  return {
    statusCode: "200",
    body: JSON.stringify(augment(body)),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
