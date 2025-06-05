// TASK 2 - Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author
db.books.find({ author: "George Orwell" });

// Update the price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } });

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });

// TASK 3 - Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 },
});

// Project only title, author and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by price (descending)
db.books.find().sort({ price: -1 });

// Pagination – Page 1 (5 books)
db.books.find().skip(0).limit(5);

// Pagination – Page 2 (next 5 books)
db.books.find().skip(5).limit(5);

// Pagination – Page 3 (next 5 books)
db.books.find().skip(10).limit(5);

// TASK 4 - Aggregation Pipeline

// Average Price of Books by Genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 },
    },
  },
  {
    $sort: { averagePrice: -1 },
  },
]);

// Author with the Most Books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 },
    },
  },
  {
    $sort: { bookCount: -1 },
  },
  {
    $limit: 1,
  },
]);

// Group Books by Publication Decade and Count Them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          {
            $toString: {
              $subtract: ["$published_year", { $mod: ["$published_year", 10] }],
            },
          },
          "s",
        ],
      },
    },
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

// TASK 5

// Create an Index on the Title Field for Faster Searches
db.books.createIndex({ title: 1 });

// Create a Compound Index on Author and Published Year
db.books.createIndex({ author: 1, published_year: 1 });

// Check performance using explain
db.books.find({ title: "1984" }).explain("executionStats");
