'use client';

import loadingAnimation from '@/assets/lotties/loading.json';
import { useLottie } from 'lottie-react';
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
  const [currentPage, setCurrentPage] = useState(initialCurrentPage + 1);
  const [hasNextPage, setHasNextPage] = useState(initialCurrentPage < initialTotalPage);

  const { View } = useLottie({ animationData: loadingAnimation, loop: true }, { width: 100, height: 60 });

  useEffect(() => {
    const fetchNextPage = async () => {
      const response = await fetchBlockchainInformation({
        page: currentPage,
        size: 20,
        blockchainInformationType: 'news',
      });

      setNewsList((prevNewsList) => [...prevNewsList, ...response.data]);
      setCurrentPage(response.currentPage + 1);
      setHasNextPage(response.currentPage < response.totalPages);
    };

    if (!inView || !hasNextPage) {
      return;
    }

    fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  // TODO: Empty, Loading Spinner UI
  return (
    <>
      <ul className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.4rem] pt-[2.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
        {newsList?.map((news) => {
          return <BlockchainNews key={`blockchain-news-${news.id}`} news={news} />;
        })}
      </ul>

      {hasNextPage && (
        <div ref={ref} className="flex items-center justify-center pt-[4.6rem]">
          {View}
        </div>
      )}
    </>
  );
};

export default BlockchainNewsSectionClient;
