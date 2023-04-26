/* eslint-disable @typescript-eslint/no-explicit-any */
/* Based on: https://github.com/rehooks/local-storage/blob/master/src/storage.ts */
interface ProxyStorage {
  getItem(key: string): string | null;
  hasItem(key: string): boolean;
  setItem(Key: string, value: string): void;
  removeItem(key: string): void;
  setObjectItem(Key: string, value: Record<string, unknown>): void;
  getObjectItem(Key: string): any | null;
}

export const localStorageProxy: ProxyStorage = {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  },

  hasItem(key: string): boolean {
    return !!localStorage.getItem(key);
  },

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  },

  setObjectItem(key: string, value: any) {
    const parsed = JSON.stringify(value) as string;
    localStorage.setItem(key, parsed);
  },
  getObjectItem(key: string): any | null {
    const stringifiedData = localStorageProxy.getItem(key);
    if (stringifiedData) {
      return JSON.parse(stringifiedData);
    }

    return null;
  },
};
