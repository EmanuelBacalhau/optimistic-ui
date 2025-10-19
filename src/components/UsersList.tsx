import { toast } from 'sonner';
import { useUpdateUser } from '@/app/hooks/useUpdateUser';
import { useUsers } from '@/app/hooks/useUsers';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Skeleton } from './ui/Skeleton';
import { Switch } from './ui/Switch';

export function UsersList() {
  const { users, isLoading } = useUsers();
  const { updateUser } = useUpdateUser();

  async function handleBlockedChange(blocked: boolean, userId: string) {
    try {
      await updateUser({ id: userId, blocked });
      toast.success('Status do usuário atualizado com sucesso!');
    } catch {
      toast.error('Erro ao atualizar status do usuário. Tente novamente.');
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {isLoading && (
        <>
          <Skeleton className="h-[72px] w-full rounded-md" />
          <Skeleton className="h-[72px] w-full rounded-md" />
          <Skeleton className="h-[72px] w-full rounded-md" />
          <Skeleton className="h-[72px] w-full rounded-md" />
        </>
      )}

      {users.map(user => (
        <div
          key={user.id}
          className={cn(
            'border rounded-md p-3 flex items-center gap-3',
            user.status === 'error' && 'border-destructive',
            user.status === 'pending' && 'opacity-50',
          )}>
          <Avatar className="size-10">
            <AvatarImage src={`https://github.com/${user.username}.png`} />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex justify-between items-center flex-1">
            <div>
              <strong className="block font-medium">{user.name}</strong>
              <span className="text-sm text-zinc-500">@{user.username}</span>
            </div>

            <div>
              <Switch
                checked={user.blocked}
                onCheckedChange={blocked => handleBlockedChange(blocked, user.id)}
                disabled={user.status === 'pending' || user.status === 'error'}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
