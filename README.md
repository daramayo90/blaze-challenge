# Blaze Challenge

You are tasked with building a RESTful API to display information about matches and players of a specific team.
At the start of the project, implement a cron job to fetch and save this information into a PostgreSQL database.
Then, expose this information through endpoints in the API.
Create a frontend component to interact with and display this data.

## Considerations

### Current Implementation

As part of this project's scope, the `teamId` is currently hard-coded in the `client/App.tsx` file. This setup is primarily for demonstration purposes, showcasing the application's ability to fetch and display match and player data for a specific team from our RESTful API.

### Future Enhancements

To enhance the application's functionality and user experience, the following features are proposed for future development:

1. **Dynamic Team Selection:** Integrate a dropdown list in the user interface, allowing users to select different teams dynamically. This feature would replace the current hard-coded teamId, enabling users to explore data for various teams.
2. **Date Filtering:** Implement a date filter feature to allow users to specify a date range. This addition would enable the application to display match and player data relevant to the selected timeframe, offering a more tailored and interactive experience.
3. **Scalability Considerations:** The proposed enhancements are designed with scalability in mind. They aim to transform the application from a static demonstration into an interactive platform, catering to a broader range of user queries and improving overall engagement.

By implementing these features, the application will not only provide more flexibility in data presentation but also enhance its capability to serve diverse user needs.

## Getting Started

1. Clone the repository
2. Clone .env.template file to .env
3. Run `npm install`
4. Initiate the database using Docker with the following command
   ```
   docker compose up -d
   ```
5. Run a migration to create the database tables using Prisma
   ```
   npx prisma migrate dev --name init
   ```
6. Check the env to obtain db credentials
7. Run `npm run dev`
8. Go to the client directory to initiate the React app `cd client`
9. Run `npm start`

## Technology Stack

-  TypeScript
-  Node.js
-  Express
-  React
-  PostgreSQL
-  Docker
