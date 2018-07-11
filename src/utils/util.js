const baseUrl = 'http://v3.wufazhuce.com:8000';
const method = {
  request: (opt) => {
    wx.request({
      url: `${baseUrl}${opt.url}` || '',
      method: opt.method || 'get',
      data: opt.data || {},
      header: opt.header || {},
      success: opt.success || ((res) => {
        console.log(res)
      })
    })
  }
}

module.exports.request = method.request;
