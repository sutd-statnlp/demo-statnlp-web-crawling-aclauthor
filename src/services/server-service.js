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
  getAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted'
  }
  getEndpoint () {
    return this.httpSchema + this.server.ip + this.port
  }
  getLastAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted/last'
  }
  getUniqueAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted/unique'
  }
  getLastUniqueAuthorsEndpoint () {
    return this.getEndpoint() + '/api/acl/authors/accepted/last/unique'
  }
}

export default new ServerService()
