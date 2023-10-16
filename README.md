# Steps to run this project:

#### Clone the project
```bash
git clone https://leap-dev.gradious.com:9112/LMS_Simplified/LMS_Simplified.git
```

#### Install the dependencies
```bash
npm i
```

#### Create .env file in the project root folder and add the below content:
```bash
JWT_SECRET=GRADIOUS_LMS_SIMPLIFIED
PORT=3000
DB_USERNAME=root
DB_PASSWORD=root
DB_NAME=lms_simplified
DB_HOST=localhost
```

#### Verify database details in the below 2 files and modify if required. Both the files should have the correct details.
    * config/config.json
    * .env
**_Please create the database in the MySQL with the name mentioned in the config files._**

#### Create the database schema and insert the seed data into the tables
```bash
npm run db:setup
```

#### Start the project
```bash
npm start
```

#### Open the browser and hit this url 
```bash
http://localhost:3000
```

#### Credentials to login
**Admin:** admin & admin

**Student:** student & student

**Note:** The frontend code is available at `public` folder.

---------------------------------------------------------
# Please follow the below instructions strictly while implementing the new feature:
1. Create the feature branch immediately after checking out the code from develop branch.

    Use the below command:
    ```bash
    git checkout -b Feature/YourName001-ModuleName
    e.g. git checkout -b Feature/RAJESH001-LoginModule    
    ```
    
    Push this new branch to remote repository:
    ```bash
    git push
    e.g. git push --set-upstream origin Feature/RAJESH001-LoginModule    
    ```

2. Follow the file structure as similar to the base code provided

3. Create separate endpoints(routes), controllers & models for each specific enduser of the app.
    * routes/learner.js - It should have the routes only related to learner
    * routes/trainer.js - It should have the routes only related to trainer
    * routes/admin.js - It should have the routes only related to admin
    * routes/guest.js - It should have the routes only related to guest

4. Whenever you create a new table, then create the file with the table name under models folder

5. If you want to add some sample records to your table by default, then add that in the scripts/dbSetup.js.

# Reporting bugs
If you find any bugs, go to `Issues` tab and post the bugs. If you know the owner of that feature, then assign it to him/her. 

# Wikipage
If you want to explain about the feature you implemented, then you can update it in the Wiki page in the git web.  

# Useful git commands:
```bash
git clone <url>
git checkout <branch>
git checkout -b <branch>
git status
git stash => To move your changes to the buffer location
git stash pop => Pull your changes from buffer location
git diff landing.html
git add landing.html
git commit -m "LEAP-001 - Adding landing page" <FILE_PATH>
git merge master  => This will merge the master into your current branch
git pull
git push 
git push --set-upstream origin Feature/YOUR_BRANCH
create pull request from web (Feature/LEAP-001 => Develop)
git config --global user.name raj
git config --global user.email raj@gmail.com 
```