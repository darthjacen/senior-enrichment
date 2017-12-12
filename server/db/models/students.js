const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL,
        $between: [0.0, 4.0],
        validate: {
            isDecimal: true
        }
    }
      
},
    {
        instanceMethods: {
            getFullName: function(){
                return this.getDataValue('firstName') + " " + this.getDataValue('lastName');
            }  
        }
    });

module.exports = Student;