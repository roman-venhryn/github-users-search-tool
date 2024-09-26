export interface UsersSearchResponse {
  items: UsersSearchResult[];
  incomplete_results: boolean;
  total_count: number;
}

export interface UsersSearchResult {
  id: number;
  login: string;
}

export interface UserInfo {
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