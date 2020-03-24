import axios from "axios"
export default {
  // This action is required!
  async fetchArchive({ commit }, archive) {
    console.log(archive)
    let { data } = await axios.get(
      "https://gist.githubusercontent.com/bittermeatball/b4dcbf80d274674cf6baf54ff4b3d837/raw/6af975df15a4222bd8173b3c151244d42ccd9fdf/blogs.json"
    )
    commit("SET_ARCHIVE", data)
  },
  // This action is required!
  async fetchLanding({ commit }, slug) {
    console.log(slug)
    let { data } = await axios.get(
      "https://gist.githubusercontent.com/bittermeatball/2c57ed9281d97748feb5c6065f066b96/raw/2566879bbc2fc77086794cfbc7439be1b20d2037/introduction.json"
    )
    commit("PUSH_PAGE", data)
  },
  // This action is required!
  async fetchSingle({ commit }, endpoint) {
    console.log(endpoint)
    let { data } = await axios.get(
      "https://gist.githubusercontent.com/bittermeatball/2c57ed9281d97748feb5c6065f066b96/raw/2566879bbc2fc77086794cfbc7439be1b20d2037/introduction.json"
    )
    commit("SET_SINGLE", data)
  }
}
