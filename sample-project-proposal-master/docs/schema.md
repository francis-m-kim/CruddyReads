# Schema Information

## review
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
stars       | integer   |
stars       | integer   |
user_id     | integer   | not null, foreign key (references users), indexed
book_id     | integer   | not null, foreign key (references books), indexed
shelf_id    | integer   | not null, foreign key (references shelves), indexed

## author
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
fname       | string    | not null
lname       | string    | not null

## book
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
isbn        | string    | not null
genre       | string    | not null
description | text      |


## shelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
