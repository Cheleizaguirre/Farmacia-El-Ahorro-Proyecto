# Pharmacy Management System

A full-stack pharmacy management application built with Angular 16/17 (frontend) and Node.js/MySQL (backend).
The system provides user authentication, product and inventory CRUD operations, route management, interactive data tables, and export functionality to PDF and Excel. Designed for practicing full-stack development, database integration, and modern web app architecture.

---

## 🎯 Purpose

1. **Develop** a robust pharmacy management system with real-world functionality.
2. **Practice** building a frontend-backend integrated application.
3. **Learn** to interact with MySQL from Node.js via RESTful APIs.
4. **Enable** inventory tracking, product management, and reporting features.

## ✨ Key Features

- User Authentication: Secure login and role-based access.
- CRUD Operations: Manage products, inventory, and categories.
- Routing & Navigation: Angular routing for multi-page SPA behavior.
- Interactive Tables: Search, filter, and sort product listings.
- Export Functionality: Generate reports in PDF and Excel formats.
- Responsive Design: Works on desktop, tablet, and mobile devices.
- Backend Logging: Request logging with morgan for monitoring.
- Cross-Origin Requests: CORS support for frontend-backend communication.

## 🛠️ Stack

| Layer	         | Technology                                               |
|----------------|----------------------------------------------------------|
| Frontend	     | Angular 16/17, Angular Material, Bootstrap, HTML/CSS, JS |
| Backend	       | Node.js, Express.js, MySQL / MySQL2                      |
| Authentication | Custom login with JWT/session (if implemented)           |
| Reporting	     | jsPDF, html2canvas, XLSX                                 |
| Utilities	     | CORS, Morgan, express-myconnection                       |
| Development	   | TypeScript, Node.js, Angular CLI                         |

---

## ⚙️ Local Installation (Developers)

Backend

```bash
# 1. Clone repository
$ git clone https://github.com/yourusername/pharmacy-management.git
$ cd pharmacy-management/backend

# 2. Install dependencies
$ npm install

# 3. Configure MySQL connection
# Edit db credentials in your config (e.g., dbConfig.js or .env)

# 4. Start backend server
$ node app.js
```

Frontend

```bash
# 1. Navigate to frontend folder
$ cd ../frontend

# 2. Install dependencies
$ npm install

# 3. Start Angular development server
$ ng serve --open
```

The app should open in your browser at http://localhost:4200/ and connect to the backend API.

---

## 🧠 How It Works

1. The Angular frontend communicates with the Node.js backend via HTTP requests.
2. Users can log in and access product management pages.
3. CRUD operations (Create, Read, Update, Delete) interact with a MySQL database.
4. Interactive tables display product and inventory information with search and filter options.
5. Reports can be exported as PDF or Excel using jsPDF and XLSX.
6. Backend logs requests for monitoring and debugging via morgan.
7. CORS is enabled to allow cross-origin requests between Angular and Node.js servers.

---

## 🚀 Future Improvements

- Implement role-based access control for admin and staff users.
- Add real-time stock alerts and notifications.
- Improve frontend UI/UX with Angular Material components.
- Integrate unit and e2e tests for frontend and backend.
- Containerize the app with Docker for easier deployment.

## 🤝 Contributing

1. Fork the repository and create a new branch (git checkout -b feature/YourFeature).
2. Make commits with clear messages following Conventional Commits.
3. Open a Pull Request describing your improvements or fixes.
