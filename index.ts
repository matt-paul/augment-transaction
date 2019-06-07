interface DatabaseEntry {
  name: string
  rating: string
}

export const fancyDb: Array<DatabaseEntry> = [
  {
    name: "Sainsburys",
    rating: "Awesome"
  },
  {
    name: "PayPal",
    rating: "Not good"
  }
]

const addNote = (retailer: string) => {
  const result = fancyDb.find(entry => entry.name === retailer)
  if (result) {
    return `${result.name} is rated ${result.rating} by Carbon Trust`
  }
  return `This retailer has no data yet`
}

interface Data {
  description: string
}
interface Body {
  type: string
  data: Data
}

export const augment = (body: Body) => {
  const data = {
    ...body.data,
    note: addNote(body.data.description)
  }
  return { ...body, data }
}

export const handler = async (event: any) => {
  const body = JSON.parse(event.body)

  // const trransactionID = body.data.id
  // const augmentTransaction = JSON.stringify(augment(body))
  // post(augmentedTransation)

  const answer = augment(body)
  return {
    statusCode: "200",
    body: JSON.stringify(answer),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
