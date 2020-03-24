export default {
  // Communicate with Devtools
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_FETCH_MODE(state, mode) {
    state.fetch_mode = mode
  },
  SET_ARCHIVE(state, data) {
    state.archive = data
  },
  SET_SINGLE(state, data) {
    state.single = data
  },
  PUSH_PAGE(state, data) {
    state.landing = [...state.landing, data]
  }
}
