import type { PageServerLoad } from './$types';
import favorites from '$lib/layouts/favorites.yaml';

export const load: PageServerLoad = async () => {
  return {
    favorites
  };
};