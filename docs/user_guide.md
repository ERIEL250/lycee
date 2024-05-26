
### user_guide.md

```markdown
# User Guide

## Introduction

Welcome to the user guide for the Express application. This guide will help you set up, run, and use the application.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ERIEL250/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Application

1. **Start the server**:
    ```bash
    npm start
    ```
    The server will start on port 7000. Open your browser and navigate to `http://localhost:7000` to view the application.

## Application Features

### Serving HTML Pages

- **Home Page**: `GET /`
    - Displays the main index page.
- **Contact Page**: `GET /contact`
    - Displays the contact page.
- **About Page**: `GET /about`
    - Displays the about page.
- **Academics Page**: `GET /academics`
    - Displays the academics page.

### Sending Emails

- **Send Email**: `POST /send`
    - Sends an email with the details provided in the request body.
    - **Request Body Parameters**:
        - `name`: The sender's name.
        - `email`: The sender's email.
        - `subject`: The email subject.
        - `message`: The email message.

- **Send Contact Request Email**: `POST /send1`
    - Sends an email with contact details and a message.
    - **Request Body Parameters**:
        - `parentName`: The parent's name.
        - `parentContact`: The parent's contact.
        - `email`: The parent's email.
        - `childName`: The student's name.
        - `class`: The student's grade.
        - `message`: The message.

## Troubleshooting

- **Port Issues**: If port 7000 is already in use, you can change the port in the `app.listen` method in `server.js`.
- **Email Issues**: Ensure that you have correctly configured the email settings and provided valid credentials.

## Contact

For any issues or questions, please contact the maintainer at `your-email@gmail.com`.
