# SunnyBartenDer
This is a api offering three models which are sunlight, user and book. you can do CRUD operations following the route below.
### **Heroku Link**: https://github.com/johndreamfuture/SunnyBartenDer

# sunlight model
 |sunlight|end-point|description             |
 |--------|-----------|------------------------|
 |        |/team      |This is the root route. |
 |Get method|/team/sunlights |Return all the sunlights object|
 |      |/team/sunlights/id |    Get the sunlight by id|
 |        |/team/sunlights/city/cityname |  Return the sunlight by city name|

# user model
|user |end-point|description|
|-----|----------|-----------|
|     |/team/users|Return all the user object|
|Get method|/team/users/id|Return the spicific  user by id|
|     |/team/users/name/username| Return the specific  user’s sunlight  by username|
|Post method |/team/users |  Create user|
|Put method|/team/users/id | Update the spicific  user by id|
|Delete method|/team/users/id |Delete  the spicific  user by id|

# book model
|book|end-point|description|
|----|---------|-----------|
|Get method|/team/books|Return all books|
|Get method|/team/books/id|Return the spicific  book by id|
|Post method|/team/books|Create book| 
|Put method|/team/books/id|Update book by id|
|Delete method|/team/books|Delete book by id|
