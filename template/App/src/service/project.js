import project from '../api/project'

export default {
  getProjects (cb) {
    project.getProjects(data => {
      // Data processing
      cb(data)
    })
  }
}
