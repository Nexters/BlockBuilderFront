export const postParticipateToVote = async ({
  eoa,
  topicNo,
  voteOption,
}: {
  eoa: string;
  topicNo: number;
  voteOption: number;
}) => {
  try {
    const response = await fetch(`/api/ca/user/vote`, {
      method: 'POST',
      body: JSON.stringify({ eoa, topic_no: topicNo, option: voteOption }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
