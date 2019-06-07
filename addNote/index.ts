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

export default addNote
