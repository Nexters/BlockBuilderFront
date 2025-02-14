import { useQuery } from '@tanstack/react-query';
import { getVoteList } from '../api/getVoteList';

export const useVoteList = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['voteList'],
    queryFn: getVoteList,
  });

  return { data, isLoading, error, refetch };
};
