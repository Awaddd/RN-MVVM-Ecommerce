import { useState, useEffect } from 'react';
import Sneaker from './sneakers.interface';
import sneakersService from './sneakers.service';

export const useAllSneakersFacade = (): [Sneaker[], boolean] => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await sneakersService.getAll();

      if (!data || data.length === 0) {
        setError(true);
        return;
      }

      setSneakers(data);
    };

    getData();
  }, []);

  return [sneakers, error];
};

export const useSneakerFacade = (id: string): [Sneaker | undefined] => {
  const [sneaker, setSneaker] = useState<Sneaker>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const getData = async () => {
      const data = await sneakersService.getByID(id);
      setSneaker(data);
    };

    getData();
  }, [id]);

  return [sneaker];
};
