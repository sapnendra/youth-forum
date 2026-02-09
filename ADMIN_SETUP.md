# Admin System Setup Guide

## Overview

This document provides step-by-step instructions for setting up and using the admin system for the Youth Forum application.

## Prerequisites

- MongoDB installed and running
- Node.js 18+ installed
- npm or yarn package manager

## Initial Setup

### 1. Environment Variables

Copy the example environment file and configure it:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and configure the following variables:

```bash
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/youth-forum

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Admin Credentials (Change these!)
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=YourSecurePassword123!
ADMIN_NAME=Admin User
```

**Important Security Notes:**

- Generate a secure `NEXTAUTH_SECRET` using: `openssl rand -base64 32`
- Use a strong password for `ADMIN_PASSWORD` (min 8 chars, mix of letters/numbers)
- Never commit `.env.local` to version control

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Admin User

In development mode, run:

```bash
curl -X POST http://localhost:3000/api/admin/seed
```

Or visit `http://localhost:3000/api/admin/seed` in your browser after starting the dev server.

**Response:**

```json
{
  "success": true,
  "message": "Admin user created successfully",
  "email": "admin@yourdomain.com",
  "name": "Admin User"
}
```

> **Note:** This endpoint only works in development (`NODE_ENV=development`) and is idempotent (safe to run multiple times).

### 4. Start Development Server

```bash
npm run dev
```

Access the admin panel at: `http://localhost:3000/admin`

## Admin Features

### 1. Dashboard (`/admin/dashboard`)

- View total registrations (pending/contacted)
- See review moderation status (pending/approved/rejected)
- Quick action links to management pages
- Real-time statistics

### 2. Registrations Management (`/admin/registrations`)

**Features:**

- View all student registrations
- Search by name, email, or college
- Filter by status (all/pending/contacted)
- Mark registrations as contacted
- Add internal notes for tracking
- Delete registrations

**Workflow:**

1. Navigate to Registrations page
2. Use filters to find specific registrations
3. Click "Mark Contacted" to update status
4. Click "Note" to add internal comments
5. Use pagination to browse large datasets

### 3. Reviews Moderation (`/admin/reviews`)

**Features:**

- View all submitted reviews
- Filter by status (pending/approved/all)
- Approve reviews for public display
- Reject reviews with optional reason
- Delete inappropriate reviews
- Star rating display

**Workflow:**

1. Navigate to Reviews page
2. Click "Pending" tab to see unmoderated reviews
3. Review the content and rating
4. Click "Approve" to publish review publicly
5. Click "Reject" to deny (optionally add reason)
6. Rejected reviews are hidden from public

## Public Features Integration

### Review Submission

Students can submit reviews via the public API:

**Endpoint:** `POST /api/reviews`

**Payload:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "college": "MIT",
  "rating": 5,
  "review": "Great program! Highly recommend."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you for your review! It will be published after moderation.",
  "data": { "id": "..." }
}
```

### Fetching Approved Reviews

Public pages can fetch approved reviews:

**Endpoint:** `GET /api/reviews?page=1&limit=10`

**Query Parameters:**

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `rating` - Filter by rating (1-5)
- `college` - Filter by college name

**Response:**

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  }
}
```

## Security Best Practices

### Authentication

- All `/admin/*` routes are protected by middleware
- Session tokens expire after 24 hours
- Passwords are hashed with bcrypt (12 rounds)
- Role verification happens server-side (never trust client)

### Authorization

- Every server action verifies admin role
- User role is stored in encrypted JWT token
- Middleware blocks unauthorized access

### Production Deployment

1. Set `NODE_ENV=production`
2. Use strong, unique `NEXTAUTH_SECRET`
3. Change default admin password
4. Disable `/api/admin/seed` endpoint (already protected by NODE_ENV check)
5. Use environment variables for all secrets
6. Enable HTTPS on production domain
7. Update `NEXTAUTH_URL` to production URL

## Troubleshooting

### Cannot Login

- Verify `.env.local` is configured correctly
- Check admin user exists: query MongoDB `users` collection
- Ensure `NEXTAUTH_SECRET` is set
- Clear browser cookies and try again

### Middleware Redirect Loop

- Verify `NEXTAUTH_URL` matches your domain
- Check that `/admin/login` is excluded from middleware protection

### Reviews Not Appearing Publicly

- Ensure reviews are approved in admin panel
- Check API endpoint is fetching with `approved: true` filter

### Database Connection Issues

- Verify MongoDB is running: `mongosh`
- Check `MONGODB_URI` connection string
- Ensure database permissions are correct

## Future Enhancements

The system is designed for easy extension:

### User Authentication (Planned)

- Google OAuth for students
- JWT with email verification
- User profile dashboards
- Review ownership (userId field ready)

### Additional Admin Features

- Bulk actions for registrations
- Export to CSV
- Email notifications
- Advanced analytics
- User role management

## Support

For issues or questions:

1. Check this documentation
2. Review implementation plan (`implementation_plan.md`)
3. Check architecture notes (`ARCHITECTURE.md`)
4. Contact system administrator

---

**Last Updated:** February 2026
**Version:** 1.0.0
