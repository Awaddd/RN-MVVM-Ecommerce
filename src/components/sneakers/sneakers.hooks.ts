import { useState, useEffect } from 'react';
import Sneaker from './sneakers.interface';
import sneakersService from './sneakers.service';

export const useAllSneakersFacade = (): [Sneaker[]] => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);

  useEffect(() => {
    (async () => {
      setSneakers((await sneakersService.getAll()) ?? []);
    })();
  }, []);

  return [sneakers];
};

export const useSneakerFacade = (id: string): [Sneaker | undefined] => {
  const [sneaker, setSneaker] = useState<Sneaker>();

  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }

      setSneaker(await sneakersService.getByID(id));
    })();
  }, [id]);

  return [sneaker];
};
