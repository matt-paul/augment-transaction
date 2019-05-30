const getEnviroCertificate = (retailer: string) =>
  `${retailer} has been given a rating of 'Evil' by Greenpeace`

export const augment = (body: any) => {
  const data = {
    ...body.data,
    note: getEnviroCertificate(body.data.description)
  }
  return { ...body, data }
}

export const handler = async (event: any) => {
  const body = JSON.parse(event.body)
  return {
    statusCode: "200",
    body: JSON.stringify(augment(body)),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
