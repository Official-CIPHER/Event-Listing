# Event Listing Web Page: Summary Report

## Introduction
The Event Listing Web Page is designed to aggregate and display events happening in Sydney, Australia. It achieves this by scraping event websites, updating the event list daily, and providing users with an intuitive interface to browse upcoming events. A key feature includes a 'GET TICKETS' button that captures user email addresses before redirecting them to the original ticket purchase site.

## Approach
### Backend
- Developed a Python-based web scraper to extract event data from multiple sources.
- Implemented a Django-based backend to manage and store event information in a PostgreSQL database.
- Scheduled the scraper to run daily using a cron job.

### Frontend
- Built a React-based frontend to display events dynamically.
- Integrated a form to capture user email addresses before ticket redirection.
- Applied Tailwind CSS for a modern and responsive UI.

## Challenges Faced
1. **Data Inconsistency:** Different event websites use varying structures, requiring custom parsing logic for each source.
2. **Scraper Blocking:** Some websites implemented anti-scraping measures, necessitating the use of headers and delays.
3. **Performance Issues:** Initial scraper implementation was slow; optimized with multithreading and caching mechanisms.
4. **User Engagement:** Ensuring users complete the email submission process before redirection required a clear and appealing UI/UX.

## Improvements & Future Enhancements
- **Improved Scraper Efficiency:** Refactored the scraper to use asynchronous requests, reducing execution time.
- **Database Optimization:** Indexed key fields in the database to enhance query performance.
- **Enhanced UI/UX:** Implemented better user flow for ticket acquisition, improving engagement.
- **Additional Data Sources:** Expanding the number of event websites scraped to increase listing diversity.
- **Event Notifications:** Future iterations will include email notifications for users based on their preferences.

## Conclusion
The Event Listing Web Page successfully automates event aggregation and provides users with an easy way to discover and purchase event tickets. While challenges such as data inconsistency and scraper blocking were encountered, they were effectively mitigated through strategic improvements. Moving forward, additional optimizations and features will further enhance user experience and platform reliability.

