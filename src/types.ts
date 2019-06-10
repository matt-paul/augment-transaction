interface Data {
  description: string
  id: string
}

export interface Transaction {
  type: string
  data: Data
}
