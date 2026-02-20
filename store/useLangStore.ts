// store/useLangStore.ts
import { create } from 'zustand'

export type Lang = 'fr' | 'en'

interface LangStore {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

export const useLangStore = create<LangStore>((set, get) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
  toggle: () => set({ lang: get().lang === 'fr' ? 'en' : 'fr' }),
}))