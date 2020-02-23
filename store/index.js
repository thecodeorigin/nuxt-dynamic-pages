export const state = () => ({
  locales: ['en', 'vi'],
  locale: 'vi',

})

export const mutations = { // Communicate with Devtools
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}