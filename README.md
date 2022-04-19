# SunnyBartenDer
This is a api offering three models which are sunlight, user and book. you can do CRUD operations following the route below.
### **Github Link**: https://github.com/johndreamfuture/SunnyBartenDer
### **Heroku Link**: https://sunnybartender.herokuapp.com/team/

## Instructions for local database manipulation:

1) Clone down this repo,
2) Install dependencies,
3) Seed the database,
4) Start server link,
5) Search the API info through a browser for the seeded information, 
6) Manipulate the information through apps like Postman.

### Clone repository

```
git clone https://github.com/johndreamfuture/SunnyBartenDer
```

### Install Dependencies

```
npm install 
```

### Seed the data

```
npm run db:seed
```

### Connect to server
```
npm run start
````

# sunlight model
 |methods|end-point|description             |
 |--------|-----------|------------------------|
 |        |/team      |This is the root route. |
 |Get method|/team/sunlights |Return all the sunlights object|
 |      |/team/sunlights/id |    Get the sunlight by id|
 |      |/team/sunlights/city/cityname |  Return the sunlight by city name|

# user model
|methods |end-point|description|
|-----|----------|-----------|
|     |/team/users|Return all the user object|
|Get method|/team/users/id|Return the spicific  user by id|
|     |/team/users/name/username| Return the specific  user’s sunlight  by username|
|Post method |/team/users |  Create user|
|Put method|/team/users/id | Update the spicific  user by id|
|Delete method|/team/users/id |Delete  the spicific  user by id|

# book model
|methods|end-point|description|
|----|---------|-----------|
|Get method|/team/books|Return all books|
|Get method|/team/books/id|Return the spicific  book by id|
|Post method|/team/books|Create book| 
|Put method|/team/books/id|Update book by id|
|Delete method|/team/books|Delete book by id|
