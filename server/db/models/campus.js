const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty : true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'http://s2.thingpic.com/images/T1/gnjX9zqNBEF1WSHBem5iWmPu.jpeg',
        
    },
    description: {
        type: Sequelize.TEXT
    }
});

module.exports = Campus;