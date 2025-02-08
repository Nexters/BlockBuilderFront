import { TBlockchainInformationApiResponse, TBlockchainInformationResponse } from './type';

export const convertFromBlockchainInformationApiResponse = (
  serverData: TBlockchainInformationApiResponse
): TBlockchainInformationResponse => {
  return {
    ...serverData,
    data: serverData.data.map((item) => ({
      id: item.id,
      url: item.url,
      imgUrl: item.img_url,
      startDate: item.start_date,
      endDate: item.end_date,
      title: item.title,
      contentText: item.content_text,
      datePublished: item.date_published,
      prize: item.prize,
      host: item.host,
      sourceIndex: item.source_index,
      network: item.network,
      organizationCode: item.organization_code,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      sourceUrl: item.source_url,
      categoryCode: item.category_code,
    })),
  };
};
