export interface VoteInfo {
  id: number;
  topic_no: number;
  question: string;
  option_one: string;
  option_two: string;
  option_one_votes: number;
  option_two_votes: number;
  voter: number;
  end_time: string;
  created_at: string;
  updated_at: string;
  option_one_percentage: string;
  option_two_percentage: string;
}

export interface VoteInfoByUser {
  vote_id: number;
  voter_address: string;
  vote_option: number;
  receipt_link: string;
  vote_time: string;
  topic_id: number;
  question: string;
  option_one: string;
  option_two: string;
  option_one_votes: number;
  option_two_votes: number;
  end_time: string;
}
