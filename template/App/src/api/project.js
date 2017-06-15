import axios from 'axios'

export default {
  getProjects (cb) {
    axios.get('/api').then(({data}) => {
      cb(data.data)
    })
  }
}
