'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchBlockchainInformation } from '../../api/fetchBlockchainInformation';
import { TBlockchainInformationData } from '../../type';
import BlockchainNews from './BlockchainNews';

const BlockchainNewsSectionClient = ({
  initialCurrentPage,
  initialTotalPage,
  initialData,
}: {
  initialCurrentPage: number;
  initialTotalPage: number;
  initialData: TBlockchainInformationData[];
}) => {
  const { ref, inView } = useInView();

  const [newsList, setNewsList] = useState<TBlockchainInformationData[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage + 1);
  const [hasNextPage, setHasNextPage] = useState(initialCurrentPage < initialTotalPage);

  useEffect(() => {
    const fetchNextPage = async () => {
      setIsLoading(true);
      const response = await fetchBlockchainInformation({
        page: currentPage,
        size: 20,
        blockchainInformationType: 'news',
      });

      setNewsList((prevNewsList) => [...prevNewsList, ...response.data]);
      setCurrentPage(response.currentPage + 1);
      setHasNextPage(response.currentPage < response.totalPages);
      setIsLoading(false);
    };

    if (!inView || !hasNextPage || isLoading) {
      return;
    }

    fetchNextPage();
  }, [inView, isLoading, currentPage, hasNextPage]);

  // TODO: Empty, Loading Spinner UI
  return (
    <>
      <ul className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.4rem] pt-[2.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
        {newsList?.map((news) => {
          return <BlockchainNews key={`blockchain-news-${news.id}`} news={news} />;
        })}
      </ul>

      {!isLoading && hasNextPage && (
        <div ref={ref} className="flex h-[10rem] items-center justify-center">
          loading..
        </div>
      )}
    </>
  );
};

export default BlockchainNewsSectionClient;
