# karma-test

STEP 1:
import karma.sql  in SQL folder to your database

-open terminal
-mysql -u root -p karma < (location)\karma.sql
-type password
-Check your mysql database


STEP 2:
-add your username and password in database.js
STEP 3:
-type npm start in terminal    


END POINTS:

GET:http://localhost:8080/author  to get all authors
POST:http://localhost:8080/author to add an author

GET:http://localhost:8080/author/:authorId  to get details of a perticular author
PUT:http://localhost:8080/author/:authorId to update the details of perticular author
DELETE:http://localhost:8080/author/:authorId to delete a pertiular author


GET:http://localhost:8080/book  to get all books
POST:http://localhost:8080/book to add a book

GET:http://localhost:8080/book/:bookId  to get details of a perticular book
PUT:http://localhost:8080/book/:bookId to update the details of perticular book
DELETE:http://localhost:8080/books/:bookId to delete a pertiular book


GET:http://localhost:8080/review  to get all books
POST:http://localhost:8080/review to add a review

GET:http://localhost:8080/review/:reviewId  to get details of a perticular review
PUT:http://localhost:8080/review/:reviewId to update the details of perticular review
DELETE:http://localhost:8080/books/:reviewId to delete a pertiular review

GET:http://localhost:8080/review/book/:bookId  to get all reviews of a perticular book
GET:http://localhost:8080/book/author/:authorId  to get books of a perticular author




