# motorway-project

## Motorway tech test

Your task is to build a simple API that reads from a database table and returns all the rows in the JSON format. You must use [Express](http://expressjs.com/) and [Sequelize](https://sequelize.org/). Your application must create a table called `vehicles` with the following fields:

- `id`: primary key, sequential integer
- `make`: string
- `model`: string
- `createdAt`: datetime
- `updatedAt`: datetime

Your code should include a seeder file to populate the DB with some dummy data.

You can use any database of your choice.

**Deliverable:** 

A Github repository with the complete task.

**Bonus points for:**

- Error handling
- Good commit history and messages
- Separation between network, handler and database layers


## How to use 

1. ``` npm install``` 
   
2. ```sequelize db:create ``` to create 

3. ``` sequelize db:migrate ```

4. ```sequelize db:seed:all``` to add data to table

5. ``` npm run dev ``` to start server 

6. Go to [localhost](http://localhost:5000/vehicles) once server has successfully started 


