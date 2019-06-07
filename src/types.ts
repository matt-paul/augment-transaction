interface Data {
  description: string;
}

export interface Transaction {
  type: string;
  data: Data;
}
