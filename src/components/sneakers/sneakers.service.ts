import { api } from '../../config/api';
import Sneaker from './sneakers.interface';

const url = `${api}/sneakers`;

export default {
  getAll: async (): Promise<Sneaker[] | undefined> => {
    return await fetch(url)
      .then(response => response.json())
      .then(response => response.data)
      .catch(err => {
        console.log('error', err);
      });
  },
  getByID: async (id: string): Promise<Sneaker | undefined> => {
    return await fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(response => response.data)
      .catch(err => {
        console.log('error', err);
      });
  },
};
