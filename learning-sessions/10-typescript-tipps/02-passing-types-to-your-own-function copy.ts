/* eslint-disable no-console */
const makeFetch = <TRes>(url: string): Promise<TRes> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string; lastName: string }>("/api/endpoint").then(
  (res) => {
    console.log(res.firstName);
    console.log(res.lastName);
  }
);

export {};
