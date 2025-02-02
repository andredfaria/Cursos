const express = require('express');
const multer = require('multer');

const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');
const SpotController = require('./controllers/SpotController');
const uploadConfig = require('./config/upload');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports  = routes;