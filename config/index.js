var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':'
    + configValues.pwd + '@ds161021.mlab.com:61021/notepad';
  }
}
