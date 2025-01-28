import ThemeSwitch from "@/components/ThemeSwitch";
import { formatRelativeTime } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { blocChainNetworkCodeNameMap, newsList } from "./const";

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mobile:px-[2rem] tablet:mx-auto tablet:max-w-[62.8rem] desktop:mx-auto desktop:max-w-[84rem]">
        <div>
          <h2 className="text-title-1-semibold text-gray-900">이벤트</h2>
        </div>

        <div>
          <h2 className="pb-[0.8rem] text-title-1-semibold text-gray-900">
            최신 뉴스
          </h2>
          <p className="text-body-2-regular text-gray-700">
            블록체인 관련 최신 뉴스를 확인하세요!
          </p>

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
                    <p className="pt-[1.4rem] text-body-2-medium text-gray-700">
                      {formatRelativeTime(datePublished)} •{" "}
                      {blocChainNetworkCodeNameMap[network]}
                    </p>
                    <h3 className="line-clamp-2 pt-[0.4rem] text-title-3-semibold text-gray-900">
                      {title}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ThemeSwitch />
    </main>
  );
}
