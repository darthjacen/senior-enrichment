'use strict';
const student = require('./students');
const campus = require('./campus');
const db = require('../index');

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!



// This is also probably a good place for you to set up your associations

student.belongsTo(campus);
campus.hasMany(student, { onDelete: 'cascade', hooks: true });
module.exports = db
module.exports = student
module.exports = campus
