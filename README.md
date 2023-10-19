# React book library
[Live preview](http://bbm2910.github.io/react-book-library)

This is a simple React-based web application for managing and displaying a list of books. It uses React Router for navigation and fetching book data from a server using the useFetch custom hook.


## Prerequisites
To run this application locally, you need to have the following installed:
Node.js
React
React Router

## Components
App: The main component that sets up the routing for the app.
Home: Displays a list of books fetched from the server.
AddBook: Provides a form for adding new books.
BookDescription: Displays detailed information about a specific book.
NotFound: A component to handle 404 errors.

## Custom Hook - useFetch
The useFetch custom hook is used for making HTTP requests to fetch data from a specified URL. It handles loading, error handling, and aborting requests using the AbortController.

## Error Handling
Errors during data fetching are displayed to the user, and an error message is shown.
The custom useFetch hook handles network errors and aborts requests when the component is unmounted.
