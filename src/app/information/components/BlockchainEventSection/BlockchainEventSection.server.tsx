import { fetchHackathonList } from '../../actions/fetchHackathonList';
import { fetchMeetupList } from '../../actions/fetchMeetupList';
import BlockchainEventSectionClient from './BlockchainEventSection.client';

const BlockchainEventSection = async () => {
  const [initialHackathonListResponse, initialMeetupListResponse] = await Promise.all([
    fetchHackathonList({}),
    fetchMeetupList({}),
  ]);

  return (
    <BlockchainEventSectionClient
      hackathonList={initialHackathonListResponse.data}
      meetupList={initialMeetupListResponse.data}
    />
  );
};

export default BlockchainEventSection;
