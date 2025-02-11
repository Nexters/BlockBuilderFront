import { fetchBlockchainInformation } from '../../api/fetchBlockchainInformation';
import BlockchainNewsSectionClient from './BlockchainNewsSection.client';

const BlockchainNewsSection = async () => {
  const initialNewsResponse = await fetchBlockchainInformation({
    page: 1,
    size: 20,
    blockchainInformationType: 'news',
  });

  return (
    <BlockchainNewsSectionClient
      initialCurrentPage={initialNewsResponse.currentPage}
      initialTotalPage={initialNewsResponse.totalPages}
      initialData={initialNewsResponse.data}
    />
  );
};

export default BlockchainNewsSection;
