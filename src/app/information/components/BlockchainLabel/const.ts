import { TBlockchainNetworkCode } from '../../type';

export type TBlockchainLabel = {
  text: string;
  value: string;
};

export const blockchainNetworkLabelMap: { [key in TBlockchainNetworkCode]: TBlockchainLabel } = {
  '00': { text: '기타', value: 'etc' },
  '01': { text: '이더리움', value: 'ethereum' },
  '02': { text: '솔라나', value: 'solana' },
  '03': { text: '수이', value: 'sui' },
  '04': { text: '압토스', value: 'aptos' },
  '05': { text: '코스모스', value: 'cosmos' },
  '06': { text: '니어', value: 'near' },
  '07': { text: '미나', value: 'mina' },
  '08': { text: '옵티미즘', value: 'optimism' },
  '09': { text: '아비트럼', value: 'arbitrum' },
  '10': { text: '아발란체', value: 'avalanche' },
};
