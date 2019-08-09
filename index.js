var db = require('./models/');

db.user.findAll({ where: { lastName: 'Booher' } })
  .then((results) => {
    results.forEach(function (index) {
      console.log(index.id, index.firstName);
    })
  });