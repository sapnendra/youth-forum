You are a senior full-stack engineer designing a production-grade ADMIN SYSTEM and DATA ARCHITECTURE for a Next.js (App Router) application using TypeScript, TailwindCSS, and MongoDB.

This system must handle current admin operations AND be future-ready for student user profiles, dashboards, and personalization features.

--------------------------------------------------
CORE OBJECTIVE
--------------------------------------------------
1) Build a secure admin system to manage:
   - Registrations
   - Reviews (moderation)

2) Design a scalable USER MODEL for future features such as:
   - Student profiles
   - Login-based dashboards
   - Review ownership
   - Course participation
   - Hostel-related features

--------------------------------------------------
TECH STACK (MANDATORY)
--------------------------------------------------
- Next.js (App Router)
- TypeScript
- TailwindCSS
- MongoDB
- Server Actions or API Routes
- Secure authentication
- Environment-based secrets

--------------------------------------------------
ADMIN AUTHENTICATION (Use NextAuth)
--------------------------------------------------
- Admin-only access
- Middleware protection for all /admin routes
- No public access
- Separate admin auth logic from future user(Will use google auth and jwt with email verification auth)
- Avoid coupling admin credentials with user model

--------------------------------------------------
ROUTES STRUCTURE
--------------------------------------------------
/admin
/admin/login
/admin/dashboard
/admin/registrations
/admin/reviews

Future:
/login
/register
/profile
/dashboard

--------------------------------------------------
CURRENT DATA MODELS
--------------------------------------------------

Collection: registrations
Fields:
- name
- email
- phone
- college
- city
- message
- contacted (boolean)
- internalNote (string)
- createdAt

Collection: reviews
Fields:
- name
- email
- college
- rating
- review
- approved (boolean)
- createdAt
- updatedAt

--------------------------------------------------
FUTURE-READY USER MODEL (MANDATORY DESIGN)
--------------------------------------------------

Create a separate collection:

Collection name:
users

Purpose:
- Represents an authenticated student user
- Will be used for profiles, dashboards, and feature ownership

Schema fields:
- _id
- name
- email (unique, indexed)
- phone (optional)
- college
- city
- role ("student" | "admin")
- profileStatus ("incomplete" | "active" | "suspended")
- avatar
- bio
- joinedAt
- updatedAt

Auth-related (future use):
- google auth and jwt with email verification
- emailVerified (boolean)

Indexes:
- email (unique)
- role
- profileStatus

--------------------------------------------------
RELATIONSHIPS (IMPORTANT)
--------------------------------------------------
- reviews.userId → references users._id (nullable for legacy reviews)
- registrations.userId → optional reference to users._id
- Future courses, attendance, hostel data should reference users._id

Design schemas so:
- Current system works without users
- Future features can attach users cleanly

--------------------------------------------------
ADMIN SYSTEM EXTENSIONS
--------------------------------------------------
Admin should be able to:
- View user list (future)
- Promote/demote roles
- Suspend profiles
- Link registrations to users

(Implement logic placeholders; full UI not required now.)

--------------------------------------------------
BACKEND RULES
--------------------------------------------------
- Never trust client role claims
- Always verify role server-side
- Admin actions must check role === "admin"
- User data mutations must be isolated from admin logic

--------------------------------------------------
SECURITY & SCALABILITY
--------------------------------------------------
- No breaking changes when adding auth
- Use stable IDs
- Avoid tightly coupled schemas
- Plan for RBAC (role-based access control)
- Avoid hard deletes when possible

--------------------------------------------------
OUTPUT EXPECTATIONS
--------------------------------------------------
Deliver:
1) Admin system (registrations + reviews)
2) User schema definition
3) Relationship-ready DB models
4) Comments explaining future extensibility
5) Clean, production-grade TypeScript code

--------------------------------------------------
ENGINEERING MINDSET
--------------------------------------------------
Design this like:
- A long-lived platform
- With future dashboards, profiles, and analytics
- Minimal refactors later
- Clear separation of concerns

Do NOT:
- Merge admin into user logic
- Overcomplicate auth now
- Break current public features

This system must scale gracefully as BACE grows.
