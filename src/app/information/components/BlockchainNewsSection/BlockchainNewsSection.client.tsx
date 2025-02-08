'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getNewsList } from '../../actions/getNewsList';
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

  useEffect(() => {
    const fetchNextPage = async () => {
      const res = await getNewsList({ page: currentPage });

      setNewsList((prevNewsList) => [...prevNewsList, ...res.data]);
      setCurrentPage(res.currentPage + 1);
      setHasNextPage(res.currentPage < res.totalPages);
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
        <div ref={ref} className="flex h-[10rem] items-center justify-center">
          loading..
        </div>
      )}
    </>
  );
};

export default BlockchainNewsSectionClient;
