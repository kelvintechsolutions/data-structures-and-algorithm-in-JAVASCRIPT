/* Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list. */

// Define the Movie class with a method to display movie details
class Movie {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    // Method to display movie details
    displayDetails() {
        return `Title: ${this.title}, Genre: ${this.genre}`;
    }
}

// Define the VideoRentalKiosk class with more methods
class VideoRentalKiosk {
    constructor() {
        this.movies = [];           // List of available movies
        this.rentedMovies = [];     // List of rented movies
    }

    // Add a movie to the available movies list
    addMovie(movie) {
        if (this.movies.find(m => m.title === movie.title)) {
            console.log(`Movie ${movie.title} is already available.`);
            return;
        }
        this.movies.push(movie);
    }

    // Check out a movie
    checkOutMovie(title) {
        const movieIndex = this.movies.findIndex(movie => movie.title === title);
        if (movieIndex !== -1) {
            const [rentedMovie] = this.movies.splice(movieIndex, 1);
            this.rentedMovies.push(rentedMovie);
            console.log(`You have checked out: ${rentedMovie.title}`);
            this.displayRentedMovies();
        } else {
            console.log(`Movie not available: ${title}`);
        }
    }

    // Check in (return) a movie
    checkInMovie(title) {
        const movieIndex = this.rentedMovies.findIndex(movie => movie.title === title);
        if (movieIndex !== -1) {
            const [returnedMovie] = this.rentedMovies.splice(movieIndex, 1);
            this.movies.push(returnedMovie);
            console.log(`You have returned: ${returnedMovie.title}`);
            this.displayAvailableMovies();
        } else {
            console.log(`Movie not found in rented list: ${title}`);
        }
    }

    // Display the list of available movies
    displayAvailableMovies() {
        if (this.movies.length === 0) {
            console.log('No movies available for rent.');
        } else {
            console.log('Available movies:');
            this.movies.forEach(movie => console.log(movie.displayDetails()));
        }
    }

    // Display the list of rented movies
    displayRentedMovies() {
        if (this.rentedMovies.length === 0) {
            console.log('No movies have been rented yet.');
        } else {
            console.log('Rented movies:');
            this.rentedMovies.forEach(movie => console.log(movie.displayDetails()));
        }
    }
}

// Example usage:
const kiosk = new VideoRentalKiosk();

// Add some movies to the kiosk
kiosk.addMovie(new Movie('The Matrix', 'Sci-Fi'));
kiosk.addMovie(new Movie('Inception', 'Sci-Fi'));
kiosk.addMovie(new Movie('The Godfather', 'Crime'));

// Display available movies
kiosk.displayAvailableMovies();

// Customer checks out movies
kiosk.checkOutMovie('Inception');  // Checks out 'Inception' and displays rented movies
kiosk.checkOutMovie('The Godfather'); // Checks out 'The Godfather' and displays rented movies

// Display available movies after checkouts
kiosk.displayAvailableMovies();

// Customer returns a movie
kiosk.checkInMovie('Inception'); // Returns 'Inception' and updates the lists

// Display all lists again
kiosk.displayAvailableMovies();
kiosk.displayRentedMovies();
