import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ls } from '../lib/local-storage';

type UseTokenFieldState = {
  token: string | undefined;
  setToken: (token: string) => void;
  logout: () => void;
};

export const useTokenStore = create<UseTokenFieldState>()(
  persist(
    (set) => ({
      token: undefined,
      setToken: (token: string) => {
        set({ token })
      },
      logout: async () => {
        ls.clear();
        set({ token: undefined });

      },
    }),
    {
      name: '@ihero/auth',
      storage: createJSONStorage(() => ls),
    },
  ),
);
