import { getNewsList } from '../../actions/getNewsList';
import BlockchainNewsSectionClient from './BlockchainNewsSection.client';

const BlockchainNewsSection = async () => {
  const initialNewsListResponse = await getNewsList({ page: 1 });

  return (
    <BlockchainNewsSectionClient
      initialCurrentPage={initialNewsListResponse.currentPage}
      initialTotalPage={initialNewsListResponse.totalPages}
      initialData={initialNewsListResponse.data}
    />
  );
};

export default BlockchainNewsSection;
