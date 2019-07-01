interface Data {
  description: string
  id: string
}
export interface Transaction {
  type: string
  data: Data
}

export interface EthicalInfo {
  title: string
  body: string
  imageURL: string
  bodyColour: string
}

export interface DatabaseEntry {
  name: string
  rating: string
}
