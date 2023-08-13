# React Protected Route Example

This repository contains an example implementation of protected routes in a React application using React Router and Redux.

## Features

- Implementation of protected routes to restrict access to certain pages based on user authentication.
- Integration of Redux for managing application state, including user authentication status.

## Components

- `Home` - A page that any user can access.
- `Dashboard` - A page that is only accessible to authenticated users with the `admin` role.
- `Header` - A navigation bar that displays links to the `Home`, `Dashboard`, and `Logout` pages if the user is authenticated, and the `Login` page if the user is not authenticated.
- `Login` - A page that allows users to login to the application.
- `Logout` - A page that allows users to logout of the application.
- `Orders` - A page that is only accessible to authenticated users with the `admin` role.
- `Profile` - A page that is only accessible to authenticated users.
- `ProtectedRoute` - A wrapper component for the `Route` component that redirects users to the `Login` page if they are not authenticated.
- `Blogs` - A page that any user can access.
