import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account in the user's email"
      );
    },
  });

  return { signup, isLoading };
}
