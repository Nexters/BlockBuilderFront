export type TBlockchainInformationType = 'hackathon' | 'meetup' | 'news';

type TBlockchainCategoryCode = '01' | '02' | '03' | '04';
export type TBlockchainNetworkCode = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';

export type TBlockchainInformationApiData = {
  id: number;
  url: string;
  img_url: string;
  start_date: string;
  end_date: string;
  title: string;
  content_text: string;
  date_published: string;
  prize: string;
  host: string;
  source_index: string;
  network: TBlockchainNetworkCode;
  organization_code: string;
  created_at: string;
  updated_at: string;
  source_url: string;
  category_code: TBlockchainCategoryCode;
};

export type TBlockchainInformationData = {
  id: number;
  url: string;
  imgUrl: string;
  startDate: string;
  endDate: string;
  title: string;
  contentText: string;
  datePublished: string;
  prize: string;
  host: string;
  sourceIndex: string;
  network: TBlockchainNetworkCode;
  organizationCode: string;
  createdAt: string;
  updatedAt: string;
  sourceUrl: string;
  categoryCode: TBlockchainCategoryCode;
};

type TBlockchainInformationCommonResponse = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type TBlockchainInformationApiResponse = {
  data: TBlockchainInformationApiData[];
} & TBlockchainInformationCommonResponse;

export type TBlockchainInformationResponse = {
  data: TBlockchainInformationData[];
} & TBlockchainInformationCommonResponse;
