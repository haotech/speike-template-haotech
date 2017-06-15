module.exports = {
  async getUsers() {
    const res = await think.proxy.getUsers();
    return res.data;
  }
}