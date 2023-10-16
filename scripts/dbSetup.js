const bcrypt = require('bcrypt');
const sequelize = require('../config/sequelize');
const User = require('../models/users');
const Role = require('../models/roles');
const Cohort = require('../models/cohorts');
const Remark = require('../models/remarks');
const CohortMember = require('../models/cohortMembers');

const checkDatabaseExists = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

const checkTablesExist = async () => {
  try {
    // await sequelize.sync({ force: true }); // force true will recreate the tables even if it exists
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to sync models:', error);
    process.exit(1);
  }
};

const seedData = async () => {
    try {
      // Check if roles table is empty before seeding data
      const count = await Role.count();
      if (count === 0) {
        await Role.bulkCreate([
          { id: 'R01', role: 'admin' },
          { id: 'R02', role: 'guest_admin' },
          { id: 'R03', role: 'trainer' },
          { id: 'R04', role: 'learner' }
        ]);
        console.log('Roles seeded successfully.');
      }
  
      // Check if users table is empty before seeding data
      const userCount = await User.count();
      if (userCount === 0) {
        const hashedAdminPassword = await bcrypt.hash('admin', 10);
        const hashedStudentPassword = await bcrypt.hash('student', 10);

        await User.bulkCreate([
          {
            id: 'U0000001',
            username: 'admin',
            email: 'admin@gmail.com',
            password: hashedAdminPassword,
            mobile: '9012345678',
            RoleId: 'R01' // Assuming 'R01' is the ID for 'admin' role
          },
          {
            id: 'U0000002',
            username: 'student',
            email: 'student@gmail.com',
            password: hashedStudentPassword,
            mobile: '9012345678',
            RoleId: 'R04' // Assuming 'R04' is the ID for 'learner' role
          }
        ]);
        console.log('Users seeded successfully.');
      }

      const cohortCount = await Cohort.count();
      if (cohortCount === 0) {
        // Seed cohorts data
        await Cohort.bulkCreate([
          {
            id: 'COH00001',
            name: 'Cohort 1',
            course_name: 'Fullstack developer',
            start_date: new Date('2023-07-01'),
            end_date: new Date('2023-08-31'),
            mode: 'Online',
            type: 'Regular',
            institute: 'XYZ Institute',
          },
          {
            id: 'COH00002',
            name: 'Cohort 2',
            course_name: 'Dev Algo',
            start_date: new Date('2023-08-15'),
            end_date: new Date('2023-10-15'),
            mode: 'In-person',
            type: 'Weekend',
            institute: 'ABC Academy',
          }
        ]);
        console.log('Cohorts seeded successfully.');
      }
  
      // Check if remarks table is empty before seeding data
      const remarkCount = await Remark.count();
      if (remarkCount === 0) {
        // Seed remarks data for the first student user
        const firstStudent = await User.findOne({ where: { username: 'student' } });
  
        if (firstStudent) {
          await Remark.bulkCreate([
            {
              user_id: firstStudent.id,
              remarks: 'Great progress in the course',
              created_by: 'Instructor A',
              created_at: new Date(),
            },
            {
              user_id: firstStudent.id,
              remarks: 'Needs improvement in assignments',
              created_by: 'Instructor B',
              created_at: new Date(),
            }
          ]);
          console.log('Remarks seeded successfully.');
        }
      }

      // Check if cohort_members table is empty before seeding data
      const cohortMemberCount = await CohortMember.count();
      if (cohortMemberCount === 0) {
        // Seed cohort_members data
        await CohortMember.bulkCreate([
          {
            cohort_id: 'COH00001', // Assuming 'COH00001' is the cohort ID from the cohorts table
            user_id: 'U0000002', // Assuming 'U0000002' is the user ID of a learner from the users table
          },
          // Add more entries if needed...
        ]);
        console.log('Cohort Members seeded successfully.');
      }

    } catch (error) {
      console.error('Error seeding data:', error);
      process.exit(1);
    }
  };

const setupDatabase = async () => {
  await checkDatabaseExists();
  await checkTablesExist();
  await seedData();
  process.exit();
};

setupDatabase();
