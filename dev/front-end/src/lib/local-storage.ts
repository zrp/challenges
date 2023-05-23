import { isServer } from './isServer';

const dummyStorageApi = {
  getItem: () => '',
  setItem: () => '',
  removeItem: () => '',
  clear: () => '',
};

export const ls = (!isServer ? localStorage : dummyStorageApi) as Storage;
