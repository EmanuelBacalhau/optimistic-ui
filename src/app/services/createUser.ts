import { sleep } from '@/lib/utils';
import type { IUser } from '../types/IUser';

interface ICreateUserDTO extends Omit<IUser, 'id'> {}

export async function createUser({ blocked, name, username }: ICreateUserDTO) {
  const responde = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: String(Math.floor(Math.random() * 10000)),
      name,
      username,
      blocked,
    }),
  });
  const data = await responde.json();
  await sleep(500);
  return data as IUser;
}
