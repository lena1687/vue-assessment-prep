import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import type { User } from '../types/user.ts';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return Array.isArray(res.data) ? res.data : [];
};

export function useUsersQuery() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}
