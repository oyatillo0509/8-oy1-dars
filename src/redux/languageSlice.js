import { createSlice } from '@reduxjs/toolkit';

const initialTexts = {
  en: {
    title: "A top-notch Webflow Design Agency",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere volutpat massa rhoncus.",
    getStarted: "Get started",
    learnMore: "Learn more",
  },
  uz: {
    title: "Eng yaxshi Webflow dizayn agentligi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pozitsiyalar massa rhoncus bo'ldi.",
    getStarted: "Boshlash",
    learnMore: "Ko'proq o'rganing",
  },
  ru: {
    title: "Отличное агентство веб-дизайна Webflow",
    description: "Лорем ипсум долор сит амет, адиписцинг элит. Позиции масс ронкус.",
    getStarted: "Начать",
    learnMore: "Узнать больше",
  },
};

const languageSlice = createSlice({
  name: 'language',
  initialState: { lang: 'en', texts: initialTexts.en },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
      state.texts = initialTexts[action.payload];
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
