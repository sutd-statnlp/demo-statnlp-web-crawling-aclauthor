
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
      let url = ServerService.getAuthorsEndpoint()
      axios.get(url)
        .then(function (response) {
          state.authors = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    crawlAllLastAuthors (state) {
      let url = ServerService.getLastAuthorsEndpoint()
      axios.get(url)
        .then(function (response) {
          state.authors = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    crawlAllUniqueAuthors (state) {
      let url = ServerService.getUniqueAuthorsEndpoint()
      axios.get(url)
        .then(function (response) {
          state.authors = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    crawlAllLastUniqueAuthors (state) {
      let url = ServerService.getLastUniqueAuthorsEndpoint()
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
    },
    crawlAllUniqueAuthors (context) {
      context.commit('crawlAllUniqueAuthors')
    },
    crawlAllLastUniqueAuthors (context) {
      context.commit('crawlAllLastUniqueAuthors')
    }
  }
}
