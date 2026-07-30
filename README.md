#  Callas Foundation Website

> A full-stack website developed for the **Callas Foundation**, a South African non-profit organization dedicated to supporting survivors of gender-based violence, strengthening communities, and providing social support services.

---

##  About the Project

The Callas Foundation Website serves as the organization's online platform to:

* Share information about the foundation and its programmes
* Provide access to support services
* Publish news, events, and community updates
* Showcase partnerships and impact
* Allow administrators to manage website content through a secure backend API

The project follows a modern full-stack architecture with a React frontend and an ASP.NET Core Web API backend.

---

#  Team

| Team Member             | Role               |
| ----------------------- | ------------------ |
| **Njabulo Hope Makana** | Backend Developer  |
| **Erykah Wanga**        | Frontend Developer |

---

#  Technologies Used

## Frontend

* React
* JavaScript
* HTML5
* CSS3
* REST API Integration

## Backend

* ASP.NET Core Web API
* C#
* Entity Framework Core
* SQL Server
* JWT Authentication
* Swagger/OpenAPI

## Development Tools

* Visual Studio 2022
* Visual Studio Code
* Git
* GitHub
* Railway (Backend Deployment)
* Postman 

---

#  Features

## Public Website

* Homepage
* About Callas Foundation
* Programmes
* News
* Events
* Gallery
* Resources
* Team
* Partners
* Contact page
* Volunteer information
* Donation information

---

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
* Volunteers
* Donations
* Contact messages
* Impact statistics

---

#  Security

The backend includes:

* JWT Authentication
* Protected administrative endpoints
* DTO validation
* Entity Framework data access
* Secure API routing

---

#  Project Structure

```text
Callas.API/
│
├── Controllers/
├── DTOs/
├── Models/
├── Services/
├── Data/
├── Migrations/
├── Program.cs
└── appsettings.json
```

Frontend files are maintained separately and consume the backend API.

---

#  Running the Project

## Backend

```bash
git clone https://github.com/<repository>.git

cd Callas.API

dotnet restore

dotnet ef database update

dotnet run
```

Swagger will be available once the API starts.

---

#  API Overview

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
* Resources
* Team
* Volunteers

---

# Future Improvements

The project roadmap includes enhancements requested by the Callas Foundation, such as:

* Homepage redesign with stronger impact messaging
* Impact statistics and visual counters
* "Get Help Now" and "Donate" buttons throughout the site
* Dedicated Support Our Work page
* Corporate partnership information
* Expanded programme pages
* News and media sections
* Events calendar
* Governance and transparency pages
* Mobile responsiveness improvements
* SEO enhancements
* Google Analytics integration
* Improved performance and page loading
* Consistent branding and additional impact photography

These improvements are based on stakeholder feedback and implementation priorities provided by the foundation.

---

#  Contributing

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

#  Acknowledgements

Special thanks to the **Callas Foundation** for the opportunity to contribute to a platform supporting survivors, families, and communities.

---

#  Development Contributions

### Backend : Njabulo Hope Makana

* Designed and developed the ASP.NET Core Web API
* Created RESTful API endpoints
* Implemented JWT authentication
* Built Entity Framework Core models and database integration
* Developed CRUD operations for website content
* Configured Swagger/OpenAPI documentation
* Assisted with frontend-backend integration
* Deployed the backend service
* Produced backend documentation and technical change logs

### Frontend : Erykah

* Designed and implemented the user interface
* Connected frontend components to backend APIs
* Built responsive pages and navigation
* Implemented the client-side user experience
* Assisted with integration and overall website functionality

---

#  License

This project was developed for the Callas Foundation as part of a collaborative software development effort.

All rights belong to the Callas Foundation unless otherwise specified.
