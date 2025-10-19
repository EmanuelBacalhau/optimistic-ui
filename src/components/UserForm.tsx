import { toast } from 'sonner';
import { useCreateUser } from '@/app/hooks/useCreateUser';
import { Button } from './ui/button';
import { Input } from './ui/Input';

export function UserForm() {
  const { createUser } = useCreateUser();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const name = formData.get('name') as string;
      const username = formData.get('username') as string;

      await createUser({ name, username, blocked: false });
      (event.target as HTMLFormElement).reset();
    } catch {
      toast.error('Erro ao cadastrar usuário. Tente novamente.');
    }
  }

  return (
    <form className="bg-muted/50 p-3 rounded-md" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <Input placeholder="Nome do usuário" name="name" />
        <Input placeholder="@ no GitHub" name="username" />
      </div>

      <Button className="mt-2 w-full">Cadastrar</Button>
    </form>
  );
}
