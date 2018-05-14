export default {
  loginByUserNameAndPassword: config => {
    return {
      success: 'true',
      msg: ''
    }
  },
  getUserInfo: () => {
    return {
      success: 'true',
      roles: ['admin']
    }
  }
}
