import { getRequest } from "../utils/request";

// 推荐歌单
export const personalized = (limit: number) => {
  return getRequest(`/personalized`, {
    limit,
  });
};
