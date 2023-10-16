const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const sequelize = require('./config/sequelize');
const authController = require('./controllers/authController');
const cohortsRouter = require('./routes/cohorts');

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', express.static('public'));

// Routes
app.post('/api/login', authController.checkLogin);

//Cohort Management
app.use('/api/cohorts', cohortsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`.cyan.bold);
		});
	})
  	.catch((err) => console.error('Error connecting to the database:', err.message.red.bold));