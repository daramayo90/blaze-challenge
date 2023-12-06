# Blaze Challenge

You are tasked with building a RESTful API to display information about matches and players of a specific team.
At the start of the project, implement a cron job to fetch and save this information into a PostgreSQL database.
Then, expose this information through endpoints in the API.
Create a frontend component to interact with and display this data.

# dev

1. Clone .env.template file to .env
2. Run `npm install`
3. Initiate the database using Docker with the following command
   ```
   docker compose up -d
   ```
4. Run a migration to create the database tables using Prisma
   ```
   npx prisma migrate dev --name init
   ```
5. Check the env to obtain db credentials
6. Run `npm run dev`
