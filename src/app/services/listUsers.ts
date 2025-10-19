import { sleep } from '@/lib/utils';
import type { IUser } from '../types/IUser';

export async function listUsers() {
  const responde = await fetch('http://localhost:3000/users');
  const data = await responde.json();
  await sleep(500);
  return data as IUser[];
}
