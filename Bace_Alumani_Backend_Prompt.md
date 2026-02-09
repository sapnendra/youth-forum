# Feature: BACE Alumni System (Protected Registration + Public Alumni Page)

You are working on this existing full-stack project for **BACE**.  
Your task is to design and implement a **complete Alumni system** while strictly maintaining:
- Existing project folder structure
- Color palette
- Typography
- UI/UX consistency
- Reusable components approach
- Clean, scalable code (future features will be added)

---

## 1. Alumni Registration (Protected Route)

### Route
`/our-alumani/registration`

### Access Control
- This route must be **password protected**
- Use a simple password gate (not login-based)
- Only users who know the password can access the form
- Password should be stored securely (env variable)
- If password is incorrect → show a clean error UI
- If correct → allow access for that session

---

### Alumni Registration Form Requirements

Create a **beautiful, modern form UI** that matches the existing BACE design system.

#### Fields (Required unless mentioned optional):
- Full Name
- Current Position / Role
- Organization / Company Name
- Year of Passing
- Course (e.g. B.Tech, M.Tech, BCA, MCA, etc.)
- College / Campus
- Field of Study (optional)
- Short Bio / Message to Juniors (optional)
- Social Links (LinkedIn, GitHub – optional)
- Profile Images:
  - Upload **minimum 1 image**
  - Maximum **3 images**
  - Preview images before submission
  - Images must be uploaded to **Cloudinary**

#### Image Handling
- Use Cloudinary for image uploads
- Store image URLs in MongoDB
- Validate:
  - Minimum 1 image
  - Maximum 3 images
  - File type: images only
- Show upload progress + errors

---

### Form Submission Behavior
- On submit:
  - Save data into a **new MongoDB collection**
  - Status should be set as: `pending`
- Show success message:
  - “Your alumni profile has been submitted for approval.”

---

## 2. MongoDB Collection Design

Create a separate collection:

### Collection Name
`alumanis`

### Example Schema
- name: String
- currentPosition: String
- company: String
- passingYear: Number
- course: String
- college: String
- fieldOfStudy: String (optional)
- bio: String (optional)
- socialLinks: Object (optional)
- images: Array of image URLs
- status: enum (`pending`, `approved`, `rejected`)
- createdAt
- updatedAt

---

## 3. Admin Panel – Alumni Approval

Integrate this into the **existing admin system**.

### Admin Capabilities
- View all alumni submissions
- Filter by:
  - Pending
  - Approved
  - Rejected
- Preview alumni details before approval
- Approve / Reject alumni
- Only **approved alumni** should appear on public page

---

## 4. Public Alumni Page

### Route
`/our-alumani` navigation is already there in header component.

### Page Purpose
Showcase **BACE Alumni Community** in a premium, inspiring way.

---

### Page Sections

#### Section 1: Hero / Intro
- Heading like: “Our Proud BACE Alumni”
- Short inspirational description
- Subtle animation / gradient background

---

#### Section 2: Filters & Search
Add advanced filtering:
- Filter by:
  - Passing Year
  - Course
  - College
- Search by:
  - Name
  - Company
- Filters should be:
  - Smooth
  - Animated
  - Non-blocking (client-side if possible)

---

#### Section 3: Alumni Cards Grid

Each Alumni card must be **visually rich and interactive**.

##### Alumni Card Design
- Card with rounded corners & shadow
- Image section:
  - Auto-moving carousel inside each card
  - Supports 1–3 images
  - Smooth transition animation
- Text content:
  - Alumni Name
  - Current Position
  - Company
  - Passing Year
  - Course
- Optional social icons (LinkedIn, GitHub)
- Hover effects:
  - Slight scale
  - Shadow glow
  - Smooth transitions

---

### Behavior Rules
- Fetch only `approved` alumni from backend
- Sort by:
  - Latest passing year first
- Pagination and lazy loading

---

## 5. UI / UX Rules

- Follow **existing BACE color palette**
- Use reusable components:
  - AlumniCard
  - ImageCarousel
  - FilterBar
- Mobile responsive (very very important)
- Accessible (ARIA labels, readable contrast)
- Elegant animations (not flashy)

---

## 6. Code Quality Expectations

- Clean folder structure
- Reusable components
- Environment variables for secrets
- Proper error handling
- Validation on both frontend & backend
- Comments where logic is complex

---

## 7. Future Scalability Considerations

Design this system so later we can add:
- Alumni profile pages
- Alumni testimonials
- Alumni networking
- Alumni login system

Do NOT hardcode values.
Keep everything extendable.

---

### Final Instruction
Build this feature **end-to-end**, fully functional, production-ready, and consistent with the current BACE project.

