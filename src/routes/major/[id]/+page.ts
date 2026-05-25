import { error } from '@sveltejs/kit';
import { majors } from '$lib/data/majors';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const major = majors.find((m) => m.id === params.id);

  if (!major) {
    throw error(404, 'Konsentrasi Keahlian tidak ditemukan');
  }

  return {
    major
  };
};
