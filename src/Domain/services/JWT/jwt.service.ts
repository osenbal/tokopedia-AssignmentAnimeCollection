import {
  getCookie,
  setCookie,
  removeCookie,
} from "@/Data/Local/cookie/cookie.local.data";

export const getAccessToken = () => {
  return getCookie("access_token");
};

export const setAccessToken = (token: string, expireTime: string | number) => {
  setCookie("access_token", token, expireTime);
};

export const removeAccessToken = () => {
  removeCookie("access_token");
};
