import { TBlockchainInformationApiResponse, TBlockchainInformationResponse } from '../type';
import { convertFromBlockchainInformationApiResponse } from '../util';

export const fetchHackathonList = async ({
  page,
  size,
}: {
  page?: number;
  size?: number;
}): Promise<TBlockchainInformationResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/info/hackathon?page=${page}&size=${size ?? 20}`);
    const data = (await res.json()) as TBlockchainInformationApiResponse;
    return convertFromBlockchainInformationApiResponse(data);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
