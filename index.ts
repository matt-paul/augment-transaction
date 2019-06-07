import addNote from "./addNote"

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

  // Decide whether we need a feed item or a add a note to transaction

  // THEN....
  // EITHER.....(2nd iteration for experimenting?)....
  // Put message in a queue ready to be picked up
  // Pick up from the queue, cross check with the database, and POST to the feed

  // OR.....(this first)!
  // Check with database and and POST to correct endpoint....
  // return a happy status if the post was successful

  const answer = augment(body)
  return {
    statusCode: "200",
    body: JSON.stringify(answer),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
