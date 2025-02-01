import { formatRelativeTime } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { newsList } from "../../const";
import BlockChainLabel from "../BlockchainLabel/BlockchainLabel";

const BlockchainNewsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.4rem] pt-[2.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
      {newsList.map((news) => {
        const {
          sourceIndex,
          title,
          url,
          datePublished,
          network,
          thumbnailUrl,
        } = news;

        return (
          <div key={sourceIndex}>
            <Link href={url} target="_blank">
              <Image
                src={thumbnailUrl}
                alt="news card thumbnail"
                width={270}
                height={150}
                layout="responsive"
                style={{ objectFit: "contain" }}
                className="rounded-[1.2rem]"
              />
              <div className="flex items-center gap-x-[1rem] pt-[1.6rem]">
                <BlockChainLabel blockchainNetwork={network} />
                <span className="text-body-2-medium text-gray-700">
                  {formatRelativeTime(datePublished)}
                </span>
              </div>
              <h3 className="line-clamp-2 pt-[0.4rem] text-title-3-semibold text-gray-900">
                {title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlockchainNewsSection;
