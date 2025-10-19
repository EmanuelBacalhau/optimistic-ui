import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../services/createUser';
import { USERS_QUERY_KEY, type UsersQueryData } from './useUsers';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createUser,
    onMutate: variables => {
      const tmpUserId = String(Math.floor(Math.random() * 10000));

      queryClient.setQueryData<UsersQueryData>(USERS_QUERY_KEY, oldData =>
        oldData?.concat({
          ...variables,
          id: tmpUserId,
          status: 'pending',
        }),
      );

      return {
        tmpUserId,
      };
    },
    onSuccess: async (data, _, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY });
      queryClient.setQueryData<UsersQueryData>(USERS_QUERY_KEY, oldData =>
        oldData?.map(user => (user.id === context?.tmpUserId ? data : user)),
      );
    },
    onError: async (_, __, context) => {
      await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY });
      queryClient.setQueryData<UsersQueryData>(USERS_QUERY_KEY, oldData =>
        oldData?.map(user =>
          user.id === context?.tmpUserId ? { ...user, status: 'error' } : user,
        ),
      );
    },
  });

  return { createUser: mutateAsync, isLoading: isPending };
}
