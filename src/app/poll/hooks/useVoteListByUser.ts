import { useQuery } from '@tanstack/react-query';
import { getVoteListByUser } from '../api/getVoteListByUser';

export const useVoteListByUser = ({ eoa }: { eoa: string }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['voteListByUser', eoa],
    queryFn: () => getVoteListByUser({ eoa }),
    enabled: !!eoa,
  });

  return { data, isLoading, error, refetch };
};
