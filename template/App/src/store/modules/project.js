import project from '../../service/project'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProjects: state => state.all
}

// actions
const actions = {
  getAllProjects ({ commit }) {
    project.getProjects(projects => {
      commit(types.RECEIVE_PROJECTS, { projects })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PROJECTS] (state, { projects }) {
    state.all = projects
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
