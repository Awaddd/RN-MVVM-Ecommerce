import { SizeOptions, Sizes } from './types';

export const getSize = (sizes: Sizes, defaultTo?: SizeOptions): SizeOptions => {
  let size: SizeOptions = defaultTo ? defaultTo : 'sm';

  Object.entries(sizes).forEach(([k, s]) => {
    if (s === true) {
      size = k as SizeOptions;
    }
  });

  return size;
};
