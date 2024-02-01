# MovieHub - React Movie Information App

MovieHub is a simple and responsive web application built with React that allows users to search for movie information and save their favorite movies. The app utilizes the OMDb API to fetch movie details.

## Features

- **Search for Movies**: Users can search for movies by entering a movie title or keywords.
- **Movie Details Page**: View detailed information about a selected movie, including title, director, genre, runtime, country, language, plot, actors, and IMDb rating.
- **Favorites**: Save movies to the favorites list for quick access.

## Getting Started

To run the app locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/MovieHub.git
   ```

2. **Install Dependencies**:

   ```bash
   cd MovieHub
   npm install
   ```

3. **Get API Key**:
   Sign up for an API key at [OMDb API](https://www.omdbapi.com/apikey.aspx) and replace `YOUR_API_KEY` in the `.env` file with your key.

4. **Run the App**:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## Dependencies

- React
- Material-UI (MUI)
- Redux
- OMDb API

## Folder Structure

The project follows a modular structure, with components, helpers, and Redux slices organized for maintainability and scalability.

```
├── src
│   ├── components
│   │   ├── partials
│   │   │   ├── FavoriteStar.js
│   │   │   ├── ImdbRating.js
│   │   │   └── ... (other reusable components)
│   │   ├── App.js
│   │   ├── Favorites.js
│   │   ├── MovieDetails.js
│   │   ├── ResponsiveAppBar.js
│   │   └── ... (other components)
│   ├── helpers
│   │   ├── movieDetailsHelpers.js
│   │   └── ... (other helper functions)
│   ├── assets
│   │   ├── defaultData.json
│   │   └── ... (other static assets)
│   ├── redux
│   │   ├── Slices
│   │   │   ├── movieSlice.js
│   │   │   ├── inputSlice.js
│   │   │   └── favoritesSlice.js
│   │   ├── store.js
│   │   └── ... (other Redux-related files)
│   ├── index.js
│   └── ... (other top-level files)
└── public
    └── ... (public assets and HTML file)
```

## Deployed Version

https://moviehubv1.netlify.app/

## Contributing

Contributions are welcome! If you'd like to contribute to MovieHub, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of React, Material-UI, and the OMDb API.
