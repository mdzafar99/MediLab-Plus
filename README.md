# MediLab+ 🏥

A comprehensive full-stack medical appointment booking system built with the MERN stack (MongoDB, Express.js, React, Node.js). MediLab+ provides a complete solution for managing medical appointments with separate interfaces for patients, doctors, and administrators.

## 🌟 Features

### For Patients

- 👤 User registration and authentication
- 🔍 Browse doctors by specialty
- 📅 Book appointments with preferred doctors
- 📝 View and manage appointment history
- ✏️ Update personal profile information
- 📧 Contact and support system

### For Doctors

- 🩺 Dedicated doctor dashboard
- 📊 View and manage appointments
- ✅ Accept or reject appointment requests
- 👨‍⚕️ Update professional profile
- 📈 Track appointment statistics

### For Administrators

- 🛡️ Admin authentication and secure access
- ➕ Add new doctors to the platform
- 📋 View all appointments across the system
- 👥 Manage doctors list
- 📊 Dashboard with system overview

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18.3
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Notifications**: React Toastify
- **Linting**: ESLint

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **File Upload**: Multer
- **Image Storage**: Cloudinary
- **Validation**: Validator.js
- **CORS**: Enabled for cross-origin requests

### Development Tools

- **Package Manager**: npm
- **Dev Server**: Nodemon (backend)
- **Deployment**: Vercel ready

## 📁 Project Structure

```
MediLab+/
├── admin/                  # Admin panel frontend
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar, Sidebar)
│   │   ├── context/       # Context API for state management
│   │   ├── pages/         # Admin pages (Dashboard, Doctors, Appointments)
│   │   └── assets/        # Static assets
│   └── package.json
│
├── clientside/            # Patient-facing frontend
│   ├── src/
│   │   ├── components/    # UI components (Header, Footer, Banner, etc.)
│   │   ├── context/       # App context
│   │   ├── pages/         # User pages (Home, Doctors, Appointments, etc.)
│   │   └── assets/        # Images and static files
│   └── package.json
│
└── backend/               # Backend API server
    ├── config/            # Configuration files (MongoDB, Cloudinary)
    ├── controllers/       # Request handlers (admin, doctor, user)
    ├── middlewares/       # Auth middlewares and file upload
    ├── models/            # Mongoose models (User, Doctor, Appointment)
    ├── routes/            # API routes
    └── server.js          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for image storage)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd MediLab+
```

2. **Install Backend Dependencies**

```bash
cd backend
npm install
```

3. **Install Client Dependencies**

```bash
cd ../clientside
npm install
```

4. **Install Admin Panel Dependencies**

```bash
cd ../admin
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=4000

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Secret Keys
JWT_SECRET=your_jwt_secret_key
ADMIN_JWT_SECRET=your_admin_jwt_secret
DOCTOR_JWT_SECRET=your_doctor_jwt_secret

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Admin Credentials (for initial setup)
ADMIN_EMAIL=admin@medilab.com
ADMIN_PASSWORD=your_secure_password
```

### Running the Application

1. **Start the Backend Server**

```bash
cd backend
npm start
# For development with auto-reload
npm run server
```

The backend will run on `http://localhost:4000`

2. **Start the Client Frontend**

```bash
cd clientside
npm run dev
```

The client will run on `http://localhost:5173`

3. **Start the Admin Panel**

```bash
cd admin
npm run dev
```

The admin panel will run on `http://localhost:5174`

## 📡 API Endpoints

### User Routes (`/api/user`)

- `POST /register` - Register new user
- `POST /login` - User login
- `GET /profile` - Get user profile
- `PUT /update-profile` - Update user profile
- `POST /book-appointment` - Book an appointment
- `GET /appointments` - Get user appointments
- `DELETE /cancel-appointment` - Cancel appointment

### Doctor Routes (`/api/doctor`)

- `POST /login` - Doctor login
- `GET /appointments` - Get doctor appointments
- `PUT /complete-appointment` - Mark appointment as completed
- `PUT /cancel-appointment` - Cancel appointment
- `GET /dashboard` - Get doctor dashboard data
- `GET /profile` - Get doctor profile
- `PUT /update-profile` - Update doctor profile

### Admin Routes (`/api/admin`)

- `POST /login` - Admin login
- `POST /add-doctor` - Add new doctor
- `GET /doctors` - Get all doctors
- `GET /appointments` - Get all appointments
- `PUT /cancel-appointment` - Cancel any appointment
- `GET /dashboard` - Get admin dashboard statistics

## 🔐 Authentication

The system uses JWT-based authentication with three separate authentication flows:

- **User Authentication**: For patients booking appointments
- **Doctor Authentication**: For healthcare providers managing their appointments
- **Admin Authentication**: For platform administrators

Each role has dedicated middleware for route protection:

- `authUser.js` - Protects user routes
- `authDoctor.js` - Protects doctor routes
- `authAdmin.js` - Protects admin routes

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a custom configuration. Both the admin and client frontends are styled consistently with:

- Responsive design for all device sizes
- Modern UI components
- Smooth transitions and animations
- Accessible color schemes

## 📦 Deployment

The project is configured for deployment on Vercel:

1. Each folder (admin, clientside, backend) contains a `vercel.json` configuration file
2. Deploy each part separately or as a monorepo
3. Update environment variables in your Vercel project settings
4. Update CORS settings in the backend to allow your frontend domains

### Build Commands

- **Backend**: `npm start`
- **Client**: `npm run build`
- **Admin**: `npm run build`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

Created with ❤️ by the MediLab+ team

## 📞 Support

For support, email support@medilab.com or open an issue in the repository.

---

**Note**: Remember to keep your `.env` file secure and never commit it to version control. Use `.env.example` files to share the required environment variable structure.
