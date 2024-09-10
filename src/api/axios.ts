import { type UserSearchItem, type UsersSearchResponse } from "@/types/types";
import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Authorization': `token ${import.meta.env.VITE_ACCESS_TOKEN}` }
});

export const getUsers = async (options: object = {}) => {
  const response = await api.get<UsersSearchResponse>(`/search/users`, options);
  return response.data;
}

export const getUser = async (username: string) => {
  const response = await api.get<UserSearchItem>(`/users/${username}`);
  return response.data;
}