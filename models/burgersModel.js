const orm = require('../config/orm.js');

const burgersModel = {
    selectAllBurgers: function (cb) {
        orm.selectAllBurgers('burgers', function (res) {
            cb(res);
        });
    },

    insertBurger: function (cols, vals, cb) {
        orm.insertBurger('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    updateBurger: function (objColVals, condition, cb) {
        orm.updateBurger('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    },
};

module.exports = burgersModel;