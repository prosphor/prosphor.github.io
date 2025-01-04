import type { PageServerLoad } from './$types';
import favorites from '$lib/favorites/favorites.yaml';

export const load: PageServerLoad = async () => {
  return {
    favorites
  };
};