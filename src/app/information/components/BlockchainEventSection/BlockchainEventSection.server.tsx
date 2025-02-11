import { fetchBlockchainInformation } from '../../api/fetchBlockchainInformation';
import BlockchainEventSectionClient from './BlockchainEventSection.client';

const BlockchainEventSection = async () => {
  const [initialHackathonResponse, initialMeetupResponse] = await Promise.all([
    fetchBlockchainInformation({ blockchainInformationType: 'hackathon' }),
    fetchBlockchainInformation({ blockchainInformationType: 'meetup' }),
  ]);

  return (
    <BlockchainEventSectionClient
      hackathonList={initialHackathonResponse.data}
      meetupList={initialMeetupResponse.data}
    />
  );
};

export default BlockchainEventSection;
