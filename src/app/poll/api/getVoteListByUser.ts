import { VoteInfoByUser } from '../types';

export const getVoteListByUser = async ({ eoa }: { eoa: string }): Promise<VoteInfoByUser[]> => {
  try {
    const response = await fetch(`/api/ca/user-vote?eoa=${eoa}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
