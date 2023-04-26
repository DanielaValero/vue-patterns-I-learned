/* eslint-disable @typescript-eslint/no-explicit-any */

interface ProxyStorage {
  getItem(key: string): string | null;
  hasItem(key: string): boolean;
  setItem(Key: string, value: string): void;
  removeItem(key: string): void;
  setObjectItem(Key: string, value: Record<string, unknown>): void;
  getObjectItem(Key: string): any | null;
}

export const sessionStorageProxy: ProxyStorage = {
  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  },

  hasItem(key: string): boolean {
    return !!sessionStorage.getItem(key);
  },

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  },

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  },

  setObjectItem(key: string, value: any) {
    const parsed = JSON.stringify(value) as string;
    sessionStorage.setItem(key, parsed);
  },

  getObjectItem(key: string): any | null {
    const stringifiedData = sessionStorageProxy.getItem(key);

    if (stringifiedData) {
      return JSON.parse(stringifiedData);
    }

    return null;
  },
};
