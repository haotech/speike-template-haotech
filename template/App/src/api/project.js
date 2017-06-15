import axios from 'axios'

export default {
  getProjects (cb) {
    axios.get('/api').then((res) => {
      cb(res.data)
    })
  }
}
