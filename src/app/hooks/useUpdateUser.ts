import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../services/updateUser';
import type { IUser } from '../types/IUser';
import { USERS_QUERY_KEY } from './useUsers';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onMutate: variables => {
      const previousUsers = queryClient.getQueryData<IUser[]>(USERS_QUERY_KEY);

      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, oldData =>
        oldData?.map(user => (user.id === variables.id ? { ...user, ...variables } : user)),
      );

      return { previousUsers };
    },
    onError: async (_, __, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY });
      queryClient.setQueryData<IUser[]>(USERS_QUERY_KEY, context?.previousUsers);
    },
  });

  return { updateUser: mutateAsync, isLoading: isPending };
}
