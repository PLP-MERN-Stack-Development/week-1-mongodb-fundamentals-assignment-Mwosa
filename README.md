# 📘 MongoDB Bookstore Assignment

This repository contains the solution to the MongoDB assignment provided via GitHub Classroom. It includes scripts to insert book data, execute a range of MongoDB queries (basic, advanced, aggregation, indexing), and supporting files to demonstrate understanding and usage of MongoDB features.

---

## 📁 Repository Structure

| File/Folder         | Description |
|---------------------|-------------|
| `insert_books.js`   | Contains the script to insert sample book documents into the MongoDB `books` collection. |
| `queries.js`        | Includes all MongoDB queries for Tasks 2–5: basic queries, advanced queries with projection/pagination, aggregation pipelines, and indexing. |
| `README.md`         | You’re reading it — includes setup, usage instructions, and assignment documentation. |
| `screenshots/`      | Contains at least one screenshot showing your collection loaded into MongoDB Compass or Atlas. |

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/try/download/community) installed **locally**, OR an **Atlas cluster** set up with access credentials.
- [MongoDB Compass](https://www.mongodb.com/products/compass) *(optional but useful for UI-based verification)*.
- A terminal or command-line interface.

---

## 🛠️ Setup Instructions

1. **Clone Your Repository**
   ```bash
   git clone <your-github-classroom-repo-url>
   cd <repo-name>
   
2. **Connect to MongoDB (Choose One)**

- Local MongoDB: Ensure your MongoDB server is running (mongod).

- MongoDB Atlas: Note your connection URI and credentials.

3. **Run the Insert Script**

Open mongosh and execute the insert script:

mongosh
use bookstore
load("insert_books.js")

This creates a books collection in a bookstore database and inserts all sample book documents.

## Running Queries

Once the data is inserted, you can open queries.js and copy-paste each section into the mongosh shell.

### OR
If you’re using Node.js and want to run queries via script execution:

Update the connection code in a Node.js environment (e.g., using mongodb package).

Wrap query blocks in functions and call them via a main script.
