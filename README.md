# Callas Foundation Website

> A full-stack website developed for the **Callas Foundation**, a South African non-profit organization dedicated to supporting survivors of gender-based violence, strengthening communities, and providing social support services.

---

## About the Project

The Callas Foundation Website serves as the organization's online platform to:

* Share information about the foundation and its programmes
* Provide access to support services
* Publish news, events, and community updates
* Showcase partnerships and impact
* Allow administrators to manage website content through a secure backend API

The project follows a modern full-stack architecture with a React frontend and an ASP.NET Core Web API backend.

---

# Team

| Team Member             | Role                                          |
| ------------------------ | ---------------------------------------------- |
| **Njabulo Hope Makana**  | Backend Developer                              |
| **Erykah Wanga**         | Frontend Developer, Site Integrator & Deployment Lead |

---

# Technologies Used

## Frontend

* React
* TypeScript
* TanStack Router (file-based routing)
* Tailwind CSS
* REST API Integration

## Backend

* ASP.NET Core Web API
* C#
* Entity Framework Core
* SQLite
* JWT Authentication
* Swagger/OpenAPI

## Infrastructure & Deployment

* Vercel (frontend hosting)
* Railway (backend hosting)
* Xneelo (domain & DNS management)
* GitHub (version control & CI)

## Development Tools

* Visual Studio 2022
* Visual Studio Code
* Git
* GitHub
* Postman

---

# Features

## Public Website

* Homepage
* About Callas Foundation
* Founder page
* Programmes (7 static pillars + admin-managed programmes)
* News
* Events
* Gallery
* Resources
* Shop
* Team & Board of Directors
* Partners
* Contact page
* Get Help page (with survivor safety guidance)
* Volunteer sign-up
* Donation page (with banking details & QR code)

## Backend API

The backend exposes RESTful endpoints for managing website content.

### Authentication

* User login
* JWT authentication
* Password management

### Content Management

* News
* Events
* Gallery
* Programmes
* Partners
* Team
* Resources
* Products (Shop)
* Volunteers
* Donations
* Contact messages
* Impact statistics

---

# Security

The backend includes:

* JWT Authentication
* Role-based authorization on all administrative write endpoints
* DTO validation
* Entity Framework data access
* Secure API routing
* Automated admin email notifications for new Contact and Volunteer submissions
* Unread-message indicators in the admin dashboard

---

# Project Structure

```text
Callas.API/
│
├── Controllers/
├── DTOs/
├── Models/
├── Services/
├── Repositories/
├── Data/
├── Migrations/
├── Program.cs
└── appsettings.json
```

Frontend files are maintained separately and consume the backend API.

---

# Running the Project

## Backend

```bash
git clone https://github.com/<repository>.git

cd Callas.API

dotnet restore

dotnet ef database update

dotnet run
```

Swagger will be available once the API starts.

## Frontend

```bash
cd callas-website

bun install

bun run dev
```

---

# API Overview

The API includes endpoints for:

* Authentication
* Contact
* Donations
* Events
* Gallery
* Impact
* News
* Partners
* Programmes
* Products (Shop)
* Resources
* Team
* Volunteers

---

# Development Contributions

### Backend — Njabulo Hope Makana

* Designed and developed the ASP.NET Core Web API
* Created RESTful API endpoints
* Implemented JWT authentication
* Built Entity Framework Core models and database integration
* Developed CRUD operations for website content
* Configured Swagger/OpenAPI documentation

### Frontend, Integration & Deployment — Erykah Wanga

* Designed and implemented the full React/TypeScript frontend, including all public pages and the admin dashboard
* Diagnosed and fixed a critical routing bug that was silently breaking the Programmes page for every visitor
* Audited every public-facing form (Contact, Volunteer, Get Help) end-to-end, found that submissions were not reaching the database or admin dashboard, and rebuilt each one with working backend integration
* Identified that the Shop feature had a fully built frontend and admin UI with no backend behind it, and built the complete Product model, API, and database migration to make it functional
* Found and closed five security vulnerabilities where admin-only actions (News, Gallery, Impact, Volunteers) were publicly writable with no authentication
* Diagnosed a data-loss bug where the production database was being wiped on every deploy, and fixed it by migrating to persistent storage on Railway
* Built email notifications and unread-count indicators for the admin dashboard, so staff are alerted to new messages and volunteer sign-ups in real time
* Audited the live site against the organization's previous WordPress site, identified missing safety-critical content (a survivor safety guide, FAQ section, national GBV statistics) and real content that had been replaced with placeholder data (team/board members, news archive), then sourced, wrote, and migrated all of it back in
* Replaced placeholder imagery and banking information with the organization's real content, including sourcing and processing a QR code and founder photo
* Owned the full production deployment: configured custom domains and DNS across Xneelo, Vercel and Railway, migrated the organization's live domain from its previous WordPress host to the new site, and verified email (MX/SPF) records remained intact throughout the cutover
* Tested, debugged and directed every fix in this document from first bug report through to production verification

---

# Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# Acknowledgements

Special thanks to the **Callas Foundation** for the opportunity to contribute to a platform supporting survivors, families, and communities.

---

# License

This project was developed for the Callas Foundation as part of a collaborative software development effort.

All rights belong to the Callas Foundation unless otherwise specified.
