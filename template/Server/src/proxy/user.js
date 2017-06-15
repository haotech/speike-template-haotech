module.exports = {
  getUsers: {
    options: {
      url: '/user',
      method: 'GET'
    },
    rule: {
      errno: 0,
      'data|10': [{
        'name': '@NAME',
        'age|0-100': 1
      }]
    }
  },

  getUserById: {
    options: {
      url: '/user',
      method: 'GET'
    },
    rule: {
      errno: 0,
      data: {
        'name': '@NAME',
        'age|0-100': 1
      }
    }
  },
};