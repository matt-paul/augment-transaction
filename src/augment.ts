import { fancyDb } from './fancyDB';
import { Transaction } from './types';

const addNote = (retailer: string) => {
  const result = fancyDb.find(entry => entry.name === retailer);
  if (result) {
    return `${result.name} is rated ${result.rating} by Carbon Trust`;
  }
  return `This retailer has no data yet`;
};

export const augment = (transaction: Transaction) => {
  const note = addNote(transaction.data.description);
  const data = {
    ...transaction.data,
    note
  };

  return { ...transaction, data };
};
