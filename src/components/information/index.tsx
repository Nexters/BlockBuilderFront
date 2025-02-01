"use client";

import { ReactNode, useState } from "react";

const InformationSection = () => {
  const maxPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <ul className="flex gap-x-[1.2rem]">
        {new Array(maxPage).fill(null).map((_, index) => {
          const page = index + 1;

          return (
            <PaginationItem
              key={`information-pagination-${page}`}
              className={
                currentPage === page ? "!bg-gray-200 !text-blue-400" : ""
              }
              onClick={() => setCurrentPage(() => page)}
            >
              {page}
            </PaginationItem>
          );
        })}
        <PaginationItem
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >{`<`}</PaginationItem>
        <PaginationItem
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPage))}
        >{`>`}</PaginationItem>
      </ul>
    </div>
  );
};

export default InformationSection;

const PaginationItem = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <li
      className={`flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-[0.8rem] text-body-2-regular text-gray-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
