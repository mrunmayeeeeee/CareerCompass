## Postman Collection: CareerCompass API Testing

Here's the complete Postman collection for testing all your backend endpoints. The base URL is `http://localhost:5000`.

### 📋 Collection Setup:
- **Base URL**: `http://localhost:5000`
- **Headers**: `Content-Type: application/json` (for POST requests)

---

## 🔍 Health Check

### GET /api/health
- **Method**: GET
- **URL**: `http://localhost:5000/api/health`
- **Expected Response**:
```json
{
  "status": "OK",
  "message": "CareerCompass API is running"
}
```

---

## 👥 Users

### POST /api/users/register
- **Method**: POST
- **URL**: `http://localhost:5000/api/users/register`
- **Body** (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "passwordHash": "hashedpassword123"
}
```
- **Expected Response**:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 3,
    "name": "Test User",
    "email": "test@example.com",
    "stream": null
  }
}
```

### GET /api/users
- **Method**: GET
- **URL**: `http://localhost:5000/api/users`
- **Expected Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "passwordHash": "hashedpass1",
    "stream": "Science",
    "currentRole": "Student",
    "skills": ["Math", "Physics"],
    "interests": ["AI", "Robotics"],
    "createdAt": "2026-02-01T13:19:14.562Z",
    "updatedAt": "2026-02-01T13:19:14.562Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "passwordHash": "hashedpass2",
    "stream": "Commerce",
    "currentRole": "Student",
    "skills": ["Accounting"],
    "interests": ["Finance"],
    "createdAt": "2026-02-01T13:19:14.562Z",
    "updatedAt": "2026-02-01T13:19:14.562Z"
  }
]
```

### GET /api/users/:id
- **Method**: GET
- **URL**: `http://localhost:5000/api/users/1`
- **Expected Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "stream": "Science",
  "profile": {
    "currentRole": "Student",
    "skills": ["Math", "Physics"],
    "interests": ["AI", "Robotics"]
  }
}
```

### PUT /api/users/:id/preferences
- **Method**: PUT
- **URL**: `http://localhost:5000/api/users/1/preferences`
- **Body** (raw JSON):
```json
{
  "stream": "Science",
  "skills": ["Math", "Physics", "Chemistry"]
}
```
- **Expected Response**:
```json
{
  "message": "Preferences updated successfully",
  "user": {
    "id": 1,
    "stream": "Science",
    "profile": {
      "currentRole": "Student",
      "skills": ["Math", "Physics", "Chemistry"],
      "interests": ["AI", "Robotics"]
    }
  }
}
```

---

## 💼 Careers

### GET /api/careers
- **Method**: GET
- **URL**: `http://localhost:5000/api/careers`
- **Expected Response**:
```json
[
  {
    "id": 1,
    "careerTitle": "Software Engineer",
    "jobDescription": "Develop software applications",
    "averageSalary": "$100,000",
    "requiredSkills": ["Programming", "Algorithms"],
    "roadmapSteps": [
      {
        "stepTitle": "Learn Basics",
        "description": "Learn programming"
      }
    ],
    "learningResources": [
      {
        "title": "Codecademy",
        "url": "https://codecademy.com",
        "isFree": true
      }
    ],
    "createdAt": "2026-02-01T13:19:14.562Z",
    "updatedAt": "2026-02-01T13:19:14.562Z"
  }
]
```

### GET /api/careers/:id
- **Method**: GET
- **URL**: `http://localhost:5000/api/careers/1`
- **Expected Response**: Same as above but single object

### GET /api/careers/:id/roadmap
- **Method**: GET
- **URL**: `http://localhost:5000/api/careers/1/roadmap`
- **Expected Response**:
```json
{
  "title": "Software Engineer",
  "steps": [
    {
      "stepTitle": "Learn Basics",
      "description": "Learn programming"
    }
  ],
  "salary": "$100,000"
}
```

### GET /api/careers/:id/resources
- **Method**: GET
- **URL**: `http://localhost:5000/api/careers/1/resources`
- **Expected Response**:
```json
[
  {
    "title": "Codecademy",
    "url": "https://codecademy.com",
    "isFree": true
  }
]
```

---

## 🏫 Colleges

### GET /api/colleges
- **Method**: GET
- **URL**: `http://localhost:5000/api/colleges`
- **Expected Response**:
```json
[
  {
    "id": 1,
    "collegeName": "IIT Delhi",
    "location": "Delhi",
    "websiteUrl": "https://iitd.ac.in",
    "description": "Top engineering college",
    "offeredCourses": [
      {
        "courseId": 1,
        "cutoff": "95%"
      }
    ],
    "createdAt": "2026-02-01T13:19:25.459Z",
    "updatedAt": "2026-02-01T13:19:25.459Z"
  }
]
```

### GET /api/colleges/:id
- **Method**: GET
- **URL**: `http://localhost:5000/api/colleges/1`
- **Expected Response**: Same as above but single object

### GET /api/colleges/course/:courseId
- **Method**: GET
- **URL**: `http://localhost:5000/api/colleges/course/1`
- **Expected Response**: Array of colleges offering the course

---

## 📚 Courses

### GET /api/courses/stream/:stream
- **Method**: GET
- **URL**: `http://localhost:5000/api/courses/stream/Science`
- **Expected Response**:
```json
[
  {
    "id": 1,
    "courseName": "B.Tech Computer Science",
    "description": "Engineering course",
    "durationYears": 4,
    "fees": "$50,000",
    "eligibilityCriteria": "12th Science",
    "stream": "Science",
    "futureScope": "High demand in tech",
    "createdAt": "2026-02-01T13:19:19.593Z",
    "updatedAt": "2026-02-01T13:19:19.593Z"
  }
]
```

### GET /api/courses/:id
- **Method**: GET
- **URL**: `http://localhost:5000/api/courses/1`
- **Expected Response**: Same as above but single object

### POST /api/courses/compare
- **Method**: POST
- **URL**: `http://localhost:5000/api/courses/compare`
- **Body** (raw JSON):
```json
{
  "courseId1": 1,
  "courseId2": 1
}
```
- **Expected Response**:
```json
{
  "course1": {
    "id": 1,
    "courseName": "B.Tech Computer Science",
    "description": "Engineering course",
    "durationYears": 4,
    "fees": "$50,000",
    "eligibilityCriteria": "12th Science",
    "stream": "Science",
    "futureScope": "High demand in tech",
    "createdAt": "2026-02-01T13:19:19.593Z",
    "updatedAt": "2026-02-01T13:19:19.593Z"
  },
  "course2": {
    "id": 1,
    "courseName": "B.Tech Computer Science",
    "description": "Engineering course",
    "durationYears": 4,
    "fees": "$50,000",
    "eligibilityCriteria": "12th Science",
    "stream": "Science",
    "futureScope": "High demand in tech",
    "createdAt": "2026-02-01T13:19:19.593Z",
    "updatedAt": "2026-02-01T13:19:19.593Z"
  }
}
```

---

## 🧠 Quiz

### GET /api/quiz
- **Method**: GET
- **URL**: `http://localhost:5000/api/quiz`
- **Expected Response**:
```json
[
  {
    "id": 1,
    "questionText": "What interests you more?",
    "options": [
      {
        "optionText": "Math",
        "associatedCareerId": 1
      },
      {
        "optionText": "Business",
        "associatedCareerId": 2
      }
    ],
    "createdAt": "2026-02-01T13:19:30.324Z",
    "updatedAt": "2026-02-01T13:19:30.324Z"
  }
]
```

### POST /api/quiz/submit
- **Method**: POST
- **URL**: `http://localhost:5000/api/quiz/submit`
- **Body** (raw JSON):
```json
{
  "answers": [
    {
      "questionId": 1,
      "selectedOption": 0
    }
  ]
}
```
- **Expected Response**: (Implementation may vary)
```json
{
  "message": "Quiz submitted successfully",
  "recommendations": ["Software Engineer"]
}
```

---

## 📝 Postman Tips:
1. **Import as Collection**: Copy these into Postman as individual requests
2. **Environment Variables**: Set `base_url = http://localhost:5000`
3. **Authentication**: Add auth headers if implementing JWT later
4. **Error Handling**: Check status codes (200 OK, 400 Bad Request, 404 Not Found, 500 Server Error)

