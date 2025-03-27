# Shorten - A high-performance URL shortener

Shorten is a high-performance URL shortener that generates 8-bit short links with fast redirection, analytics, and custom alias support.

## Features

- **Custom Branded Links**: Personalize short links with your brand.
- **Analytics Dashboard**: Track engagement, clicks, and user behavior.
- **No Cookies Required**: Get insights without tracking users invasively.
- **Seamless Integration**: Use API for automated link generation.
- **Secure & Fast**: Reliable and efficient link redirection.

## Tech Stack

- **Frontend**: React.js / Next.js
- **Backend**: Express.js
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT / OAuth
- **Hosting**: Vercel / AWS / DigitalOcean

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/shorten.git
   cd shorten
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
4. Run the development server:
   ```sh
   npm start
   ```

## Usage

1. Enter a long URL and generate a short link.
2. Share the short link with your audience.
3. Track engagement and performance from the analytics dashboard.

## API Endpoints

- `POST /shorten` - Create a short link.
- `GET /:shortCode` - Redirect to the original URL.
- `GET /stats/:shortCode` - Get analytics data.

## Contributing

Feel free to contribute! Fork the repo, create a branch, and submit a PR.

## License

This project is licensed under the MIT License.
