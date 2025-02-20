import { BASE_URL } from '@/constants/url';
import { TBlockchainInformationApiResponse, TBlockchainInformationResponse, TBlockchainInformationType } from '../type';

export const fetchBlockchainInformation = async ({
  blockchainInformationType,
  page,
  size,
}: {
  blockchainInformationType: TBlockchainInformationType;
  page?: number;
  size?: number;
}): Promise<TBlockchainInformationResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/api/info/${blockchainInformationType}?page=${page}&size=${size}`);
    const data = (await res.json()) as TBlockchainInformationApiResponse;

    return convertFromBlockchainInformationApiResponse({ apiResponse: data, blockchainInformationType });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const convertFromBlockchainInformationApiResponse = ({
  apiResponse,
  blockchainInformationType,
}: {
  apiResponse: TBlockchainInformationApiResponse;
  blockchainInformationType: TBlockchainInformationType;
}): TBlockchainInformationResponse => {
  return {
    ...apiResponse,
    data: apiResponse.data.map((item) => {
      const [startDate, endDate] = convertStartAndEndDate({
        startDate: item.start_date,
        endDate: item.end_date,
        blockchainInformationType,
      });

      return {
        id: item.id,
        url: item.url,
        imgUrl: item.img_url,
        startDate,
        endDate,
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
      };
    }),
  };
};

export const convertStartAndEndDate = ({
  startDate,
  endDate,
  blockchainInformationType,
}: {
  startDate: string;
  endDate: string;
  blockchainInformationType?: TBlockchainInformationType;
}) => {
  if (!startDate || !endDate || !blockchainInformationType) {
    return [startDate, endDate];
  }

  if (blockchainInformationType === 'news') {
    return [startDate, endDate];
  } else if (blockchainInformationType === 'hackathon') {
    const convertedStartDate = startDate?.split('.').join('. ');
    const convertedEndDate = endDate?.split('.').slice(1).join('. ');
    return [convertedStartDate, convertedEndDate];
  } else if (blockchainInformationType === 'meetup') {
    const [startDateSegment, startDateTimeSegment] = startDate?.split(' ');
    const [endDateSegment, endDateTimeSegment] = endDate?.split(' ');

    return startDateSegment === endDateSegment
      ? [`${startDateSegment.split('.').join('. ')} ${startDateTimeSegment}`, endDateTimeSegment]
      : [
          `${startDateSegment.split('.').join('. ')} ${startDateTimeSegment}`,
          `${endDateSegment.split('.').slice(1).join('. ')} ${endDateTimeSegment}`,
        ];
  } else {
    return [startDate, endDate];
  }
};
