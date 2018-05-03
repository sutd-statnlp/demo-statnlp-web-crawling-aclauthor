
import axios from 'axios'
import ServerService from '@/services/server-service'
export default {
  namespaced: true,
  state: {
    authors: []
  },
  getters: {
    getAuthors (state) {
      return state.authors
    }
  },
  mutations: {
    crawlAllAuthors (state) {
      let url = ServerService.getCrawlingAllAuthorsEndpoint()
      axios.get(url)
        .then(function (response) {
          state.authors = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    crawlAllLastAuthors (state) {
      let url = ServerService.getCrawlingAllLastAuthorsEndpoint()
      axios.get(url)
        .then(function (response) {
          state.authors = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  actions: {
    crawlAllAuthors (context) {
      context.commit('crawlAllAuthors')
    },
    crawlAllLastAuthors (context) {
      context.commit('crawlAllLastAuthors')
    }
  }
}
