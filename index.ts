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
  console.log(event)
  const body = JSON.parse(event.body)

  // const trransactionID = body.data.id
  // const augmentTransaction = JSON.stringify(augment(body))
  // post(augmentedTransation)
  return {
    statusCode: "200",
    body: JSON.stringify(augment(body)),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
