export interface UsersSearchResponse {
  items: UsersSearchItem[];
  incomplete_results: boolean;
  total_count: number;
}

export interface UsersSearchItem {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  id: number;
  login: string;
}

export interface UserSearchItem {
  user: {
    login: string;
    id: number;
    avatar_url: string,
    url: string,
    html_url: string,
    followers_url: string;
    following_url: string;
    repos_url: string,
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string
    followers: number;
    following: number;
  }
}