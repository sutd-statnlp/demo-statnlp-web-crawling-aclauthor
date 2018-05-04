<template>
  <div class="m-home">
    <div class="row justify-content-center pt-2">
      <h1>Crawl ACL Authors with Accepted Papers</h1>
    </div>
    <div class="row pt-4">
      <div class="col">
        <div class="text-center">
          <button class="btn btn-primary mt-2" @click="crawlAllAuthors()">Crawl All Authors</button>
          <button class="btn btn-primary mt-2"  @click="crawlAllLastAuthors()">Crawl Last Authors</button>
          <button class="btn btn-primary mt-2"  @click="crawlAllLastUniqueAuthors()">Crawl Last Unique Authors</button>
        </div>
        <div class="progress mt-2" v-if="isCrawling">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemax="100" style="width: 100%"></div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="table-responsive">
              <table id="table-author" class="table table-striped display">
                <caption>ACL Authors</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in authors" v-bind:key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{item}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      isCrawling: false,
      table: null
    }
  },
  methods: {
    crawlAllAuthors () {
      this.isCrawling = true
      this.$store.dispatch('author/crawlAllAuthors')
    },
    crawlAllLastAuthors () {
      this.isCrawling = true
      this.$store.dispatch('author/crawlAllLastAuthors')
    },
    crawlAllLastUniqueAuthors () {
      this.isCrawling = true
      this.$store.dispatch('author/crawlAllLastUniqueAuthors')
    },
    shrinkTable () {
      this.table = $('#table-author').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        destroy: true
      })
    }
  },
  computed: {
    authors () {
      return this.$store.getters['author/getAuthors']
    }
  },
  watch: {
    authors (value) {
      if (value.length > 0) {
        this.isCrawling = false
      }
    }
  },
  updated () {
    this.shrinkTable()
  },
  beforeUpdate () {
    if (this.table) {
      this.table.destroy()
    }
  }
}
</script>

<style scoped>

</style>
