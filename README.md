# Event Listing Web Page

This project is a web page that lists events in Sydney, Australia, by scraping event websites. The page updates daily, displays event details attractively, and includes a 'GET TICKETS' button that collects email addresses before redirecting users to the original ticket site.

## Features
- Automatically scrapes event websites daily
- Displays event details in an attractive layout
- Includes a 'GET TICKETS' button that collects user emails
- Redirects users to the original ticket purchase site

## Prerequisites
Ensure you have the following installed on your system:
- Python 3.8+
- Node.js & npm (for frontend)
- MongoDB or PostgreSQL (for database storage)
- Virtual environment (optional but recommended)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/event-listing.git
cd event-listing
```

### 2. Set Up the Backend
1. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use: venv\Scripts\activate
    ```
2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```
3. Set up environment variables in a `.env` file:
    ```ini
    DATABASE_URL=your_database_connection_string
    SCRAPING_SCHEDULE="0 0 * * *"  # Runs daily at midnight
    ```
4. Run database migrations (if using PostgreSQL):
    ```sh
    python manage.py migrate
    ```
5. Start the backend server:
    ```sh
    python manage.py runserver
    ```

### 3. Set Up the Frontend
1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

### 4. Run the Scraper
To manually trigger the event scraper, run:
```sh
python scraper.py
```
The scraper will also run automatically based on the schedule defined in `.env`.

## Deployment
For deploying the project, consider using:
- **Backend:** Docker, AWS Lambda, or Heroku
- **Frontend:** Vercel, Netlify, or a traditional hosting service

Ensure all environment variables are correctly set in production.

## Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your fork
5. Open a pull request

## License
This project is licensed under the MIT License.

## Contact
For any issues or inquiries, feel free to open an issue or contact the maintainer.

## Link Of Website

Website link:- 
https://fantastic-torrone-f88230.netlify.app

---
Happy coding! 🎉

