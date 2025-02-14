'use client';

import { userStorage } from '@/hooks/useUser';
import Container from './components/Container';
import Poll from './components/Poll';
import Tabs from './components/Tabs';
import { useVoteList } from './hooks/useVoteList';
import { useVoteListByUser } from './hooks/useVoteListByUser';
import { useMemo, useState } from 'react';

export default function PollClient() {
  const [currentTab, setCurrentTab] = useState<'ongoing' | 'end'>('ongoing');

  const { data: voteList, refetch: refetchVoteList } = useVoteList();
  const eoa = userStorage.getUserData()?.token || '';
  const { data: voteListByUser, refetch: refetchVoteListByUser } = useVoteListByUser({ eoa });

  const handleChangeTab = (tab: 'ongoing' | 'end') => {
    setCurrentTab(tab);
  };

  const polls = useMemo(() => {
    const ongoingPolls = voteList?.filter((vote) => vote.end_time > new Date().toISOString());
    const endedPolls = voteList?.filter((vote) => vote.end_time < new Date().toISOString());
    const currentPolls = currentTab === 'ongoing' ? ongoingPolls : endedPolls;
    const finalPolls = currentPolls?.map((poll) => {
      const voted = voteListByUser?.find((vote) => vote.topic_id === poll.id);
      console.log('voted: ', voted);
      return {
        ...poll,
        voted: Boolean(voted),
        voted_option: voted?.vote_option,
        receipt_link: voted?.receipt_link,
      };
    });

    return finalPolls;
  }, [currentTab, voteList, voteListByUser]);

  const handleRefetch = () => {
    refetchVoteList();
    refetchVoteListByUser();
  };

  console.log('polls: ', polls, 'voteList: ', voteList);

  return (
    <Container>
      <h1 className="text-title-1-semibold text-gray-800">투표하고 블록체인에 저장해볼까요?</h1>
      <p className="mt-[0.8rem] text-body-2-regular text-gray-700">
        투표를 하면 블록체인에 저장된 컨트렉트를 확인할 수 있어요.
      </p>
      <Tabs currentTab={currentTab} handleChangeTab={handleChangeTab}>
        {polls?.map(
          ({
            id,
            topic_no,
            question,
            voter,
            option_one,
            option_one_percentage,
            option_two,
            option_two_percentage,
            voted,
            voted_option,
            receipt_link,
          }) => (
            <Poll
              key={id}
              topicNo={topic_no}
              title={question}
              voterCount={voter}
              firstOption={option_one}
              firstOptionPercentage={Number(option_one_percentage)}
              secondOption={option_two}
              secondOptionPercentage={Number(option_two_percentage)}
              voted={voted}
              voted_option={voted_option}
              receipt_link={receipt_link}
              onVoted={handleRefetch}
            />
          )
        )}
      </Tabs>
    </Container>
  );
}
