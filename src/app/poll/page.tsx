import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import PollClient from './PollClient';
import { getVoteList } from './api/getVoteList';
import { getQueryClient } from '@/providers/getQueryClient';

export default async function PollPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryFn: getVoteList,
    queryKey: ['getVoteList'],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PollClient />
    </HydrationBoundary>
  );
}
