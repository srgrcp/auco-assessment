export const fetcher = <T>(url: string, init?: RequestInit | undefined) =>
  fetch(url, init).then<T>((res) => res.json());

export const api = <T>(path: string, init?: RequestInit | undefined) =>
  fetcher<T>(`https://jsonplaceholder.typicode.com/${path}`, init);
