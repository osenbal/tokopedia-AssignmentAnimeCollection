export const getCookie = (name: string): string | null => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name));
  return cookie ? cookie.split("=")[1] : null;
};

export const setCookie = (
  name: string,
  value: string,
  expireTime: number | string
): void => {
  const date = new Date();
  date.setTime(date.getTime() + Number(expireTime));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const removeCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
