interface DatabaseEntry {
  name: string;
  rating: string;
}

export const fancyDb: Array<DatabaseEntry> = [
  {
    name: 'Sainsburys',
    rating: 'Awesome'
  },
  {
    name: 'PayPal',
    rating: 'Not good'
  }
];
