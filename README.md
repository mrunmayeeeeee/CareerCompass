### 1. Create the Database

Run this in your `psql` terminal:

```sql
CREATE DATABASE career_compass_new;

```

*Note: After running this, connect to the new database by typing `\c career_compass_new`.*

---

### 2. Create the Questions Table

This schema includes a `category` column to power your **Recommendation Engine** (Science, Math, Arts) and a `correct_option` column for the CRUD logic.

```sql
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL, -- Science, Math, or Arts
    question_text TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_option CHAR(1) NOT NULL, -- 'A', 'B', 'C', or 'D'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

---

### 3. Insert Initial Question Data (Seed Data)

Here are the 15 questions categorized by stream to get your project started:

```sql
INSERT INTO questions (category, question_text, option_a, option_b, option_c, option_d, correct_option) VALUES
-- SCIENCE
('Science', 'What is the powerhouse of the cell?', 'Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Body', 'B'),
('Science', 'Which law states that for every action there is an equal and opposite reaction?', 'Newton 1st', 'Newton 2nd', 'Newton 3rd', 'Gravity', 'C'),
('Science', 'What is the chemical symbol for Gold?', 'Gd', 'Ag', 'Au', 'Fe', 'C'),
('Science', 'Which gas is most abundant in Earth atmosphere?', 'Oxygen', 'CO2', 'Hydrogen', 'Nitrogen', 'D'),
('Science', 'What is the speed of light approximately?', '3x10^8 m/s', '2x10^5 m/s', '5x10^6 m/s', '1x10^9 m/s', 'A'),

-- MATH / COMMERCE
('Math', 'If a shirt costs $20 after a 20% discount, what was the original price?', '$24', '$25', '$30', '$22', 'B'),
('Math', 'Solve for x: 2x + 7 = 15', '3', '5', '4', '6', 'C'),
('Math', 'Sequence: 2, 6, 12, 20, ?', '24', '28', '30', '32', 'C'),
('Math', 'What is the square root of 225?', '12', '13', '15', '25', 'C'),
('Math', 'What is 15% of 200?', '20', '25', '30', '35', 'C'),

-- ARTS
('Arts', 'Who painted the Mona Lisa?', 'Van Gogh', 'Picasso', 'Da Vinci', 'Claude Monet', 'C'),
('Arts', 'Which Indian classical dance form originated in Kerala?', 'Kathak', 'Kathakali', 'Bharatanatyam', 'Odissi', 'B'),
('Arts', 'Who is known as the Father of History?', 'Socrates', 'Herodotus', 'Aristotle', 'Plato', 'B'),
('Arts', 'The Statue of Liberty was a gift from which country?', 'UK', 'Germany', 'France', 'Italy', 'C'),
('Arts', 'Which of these is a famous work by William Shakespeare?', 'The Iliad', 'Hamlet', 'War and Peace', 'The Odyssey', 'B');

```

---

### 4. How to Verify

Type these commands in `psql` to see your work:

* `\l` : List all databases (you should see `career_compass_new`).
* `\c career_compass_new` : Connect to your new database.
* `\dt` : List your tables (you should see `questions`).
* `SELECT * FROM questions;` : View all your data.

### Next Step for your Backend

Since you are using **PostgreSQL**, you will need to update your **Node.js** backend. Instead of using `mongoose`, you should install the `pg` library or an ORM like `Sequelize` or `Prisma`.

**Would you like the updated Node.js (Express) code to connect to this PostgreSQL database?**