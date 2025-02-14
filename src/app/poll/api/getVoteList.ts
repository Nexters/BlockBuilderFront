import { VoteInfo } from '../types';

export const getVoteList = async (): Promise<VoteInfo[]> => {
  try {
    const response = await fetch('/api/ca/vote-all');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
