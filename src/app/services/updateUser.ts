import { sleep } from '@/lib/utils';
import type { IUser } from '../types/IUser';

interface IUpdateUserDTO extends Partial<Omit<IUser, 'id'>> {
  id: string;
}

export async function updateUser({ blocked, name, username, id }: IUpdateUserDTO) {
  const responde = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      blocked,
    }),
  });
  const data = await responde.json();
  await sleep(500);
  return data as IUser;
}
