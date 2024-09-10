# Github users search tool

This tool allows you to search through github users by their username.

Built with:

- React.js
- Typescript
- axios
- Github REST API
- React Router Dom
- ShadcnUI
- Tailwind CSS

## Features

- Search users by username
- Infinite scroll pagination
- Open user profile with more details (avatar image, name, followers/following, company, email, blog)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_GITHUB_ACCESS_TOKEN` - Github Access Token

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/roman-venhryn/github-users-search-tool.git`
2. Navigate to the project directory: `cd github-users-search-tool`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser

## Usage

To use the application, simply enter a Github username (or part of username) in the search bar and click the "Search" button. The app will fetch the users profiles that mach the query and display it on the screen. Scroll down until you see the last item and app will fetch more users if there are any more available.

Click on user from the search results to show the user profile page with more details about the user.

Click "Go back" button to go back to the search (the app will automatically load users from previous query).
