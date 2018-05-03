class ServerService {
  constructor () {
    this.httpSchema = 'http://'
    this.port = ':8220'

    this.servers = [{
      name: 'StatNLP 0',
      ip: '172.18.240.110',
      status: false
    }]
    this.server = this.servers[0]
  }
  getCrawlingAllAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted'
  }
  getEndpoint () {
    return this.httpSchema + this.server.ip + this.port
  }
  getCrawlingAllLastAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted/last'
  }
}

export default new ServerService()
