const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exhbs = require('express-handlebars');
const helpers = require('./utils/');
const hbs = exhbs.create({
    helpers
});
