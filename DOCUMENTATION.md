
```markdown
# API Documentation - hng_task_2

## Methods with Query Parameters

### POST - Create a Record
Create a record in the database by providing a `name` key in the URL with its value as the intended name of the person.

**Endpoint:**
```
POST /api?name=dave
```

#### Query Parameters
- `name`: dave

**Example Request (cURL):**
```shell
curl --location --request POST 'https://hng-task2--cazicruz.repl.co/api?name=dave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "name": "dave",
      "_id": "64fedd5f18db1c3228a21648",
      "__v": 0
  }
  ```

### GET - Fetch a Record
Fetch a record from the database by providing a `name` key in the URL with its value as the intended name of the person.

**Endpoint:**
```
GET /api?name=dave
```

#### Query Parameters
- `name`: dave

**Example Request (cURL):**
```shell
curl --location 'https://hng-task2--cazicruz.repl.co/api?name=dave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "_id": "64fedd5f18db1c3228a21648",
      "name": "dave",
      "__v": 0
  }
  ```

### PUT - Update a Record
Update a record in the database by providing `name` and `newName` keys in the URL with their values as the intended name of the person and the new value.

**Endpoint:**
```
PUT /api?name=dave&newName=daveoo
```

#### Query Parameters
- `name`: dave
- `newName`: daveoo

**Example Request (cURL):**
```shell
curl --location --request PUT 'https://hng-task2--cazicruz.repl.co/api?name=dave&newName=daveoo'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "person": {
          "_id": "64fedd5f18db1c3228a21648",
          "name": "daveoo",
          "__v": 0
      }
  }
  ```

### DELETE - Delete a Record
Delete a record from the database by providing a `name` key in the URL with its value as the intended name of the person.

**Endpoint:**
```
DELETE /api?name=daveoo
```

#### Query Parameters
- `name`: daveoo

**Example Request (cURL):**
```shell
curl --location --request DELETE 'https://hng-task2--cazicruz.repl.co/api?name=daveoo'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "status": "success",
      "message": "user daveoo deleted"
  }
  ```

## Methods with Path Parameters

### POST - Create a Record with Path Parameter
Create a record in the database by providing a path parameter with the intended name.

**Endpoint:**
```
POST /api/dave
```

**Example Request (cURL):**
```shell
curl --location --request POST 'https://hng-task2--cazicruz.repl.co/api/dave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "name": "dave",
      "_id": "64fedda218db1c3228a21650",
      "__v": 0
  }
  ```

### GET - Fetch a Record with Path Parameter
Fetch a record from the database by providing a path parameter with the intended name.

**Endpoint:**
```
GET /api/dave
```

**Example Request (cURL):**
```shell
curl --location 'https://hng-task2--cazicruz.repl.co/api/dave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "_id": "64fedda218db1c3228a21650",
      "name": "dave",
      "__v": 0
  }
  ```

### PUT - Update a Record with Path Parameter
Update a record in the database by providing a path parameter with the intended name and the new name value.

**Endpoint:**
```
PUT /api/dave/babadave
```

**Example Request (cURL):**
```shell
curl --location --request PUT 'https://hng-task2--cazicruz.repl.co/api/dave/babadave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "person": {
          "_id": "64fedda218db1c3228a21650",
          "name": "babadave",
          "__v": 0
      }
  }
  ```

### DELETE - Delete a Record with Path Parameter
Delete a record from the database by providing a path parameter with the intended name.

**Endpoint:**
```
DELETE /api/babadave
```

**Example Request (cURL):**
```shell
curl --location --request DELETE 'https://hng-task2--cazicruz.repl.co/api/babadave'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "status": "success",
      "message": "user babadave deleted"
  }
  ```

## POST - Create a Record with Body
Create a new person and store it in the database by providing a JSON object in the request body.

**Endpoint:**
```
POST /api
```

**Usage:**
```json
{name: "david"}
```

**Example Request (cURL):**
```shell
curl --location 'https://hng-task2--cazicruz.repl.co/api' \
--data-urlencode 'name=cido'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "name": "cido",
      "_id": "64feddca18db1c3228a21658",
      "__v": 0
  }
  ```

## GET - Fetch a Record with Body
Retrieve data associated with a name from the database by providing a JSON object in the request body.

**Endpoint:**
```
GET /api
```

**Usage:**
```json
{name: "sam"}
```

**Example Request (cURL):**
```shell
curl --location --request GET 'https://hng-task2--cazicruz.re

pl.co/api' \
--data-urlencode 'name=cido'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "_id": "64feddca18db1c3228a21658",
      "name": "cido",
      "__v": 0
  }
  ```

## PUT - Update a Record with Body
Change the name associated with a person object in the database by providing `name` and `newName` keys in the request body.

**Endpoint:**
```
PUT /api
```

**Usage:**
```json
{name: "sam", newName: "samuel"}
```

**Example Request (cURL):**
```shell
curl --location --request PUT 'https://hng-task2--cazicruz.repl.co/api' \
--data-urlencode 'name=cido' \
--data-urlencode 'newName=cid'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "person": {
          "_id": "64feddca18db1c3228a21658",
          "name": "cid",
          "__v": 0
      }
  }
  ```

## DELETE - Delete a Record with Body
Delete a record from the database by providing a JSON object with a `name` value as the intended name of the person.

**Endpoint:**
```
DELETE /api
```

**Usage:**
```json
{name: "david"}
```

**Example Request (cURL):**
```shell
curl --location --request DELETE 'https://hng-task2--cazicruz.repl.co/api' \
--data-urlencode 'name=cid'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  {
      "status": "success",
      "message": "user cid deleted"
  }
  ```

## GET - Get All Persons
Retrieve a list of all persons in the database. No parameters need to be added in the body, query, or URL.

**Endpoint:**
```
GET /api
```

**Example Request (cURL):**
```shell
curl --location 'https://hng-task2--cazicruz.repl.co/api'
```

**Response:**
- Status: 200 OK
- Body (JSON):
  ```json
  [
      {
          "_id": "64f76fba8eafc778676e2688",
          "favoriteFoods": [
              "burrito",
              "hot-dog"
          ],
          "name": "Pablo",
          "age": 26,
          "__v": 0
      },
      {
          // More person objects...
      }
  ]
  ```
# API Limitations:

   ## Limited Input Validation:
   The API assumes that clients will provide valid and well-formatted input for parameters like name and newName. There is minimal input validation, and invalid input may not be handled effectively.

  ## Overloaded Endpoint:
  The API uses the same endpoint for multiple operations (GET, POST, PUT, DELETE), making it harder to follow RESTful principles. This approach may lead to confusion and a lack of clear separation of concerns.

## Inadequate Error Handling:
    Error handling is limited. While the API returns appropriate HTTP status codes, the error messages and descriptions provided to clients could be more informative and helpful in diagnosing issues.

  ## Lack of Authentication and Authorization:
  The API does not incorporate authentication or authorization mechanisms. This means that there are no security measures in place to restrict access to certain endpoints, posing a potential security risk.

# API Assumptions:

  ## Input Sources:
  The API assumes that clients can provide name and newName parameters via request body, query parameters, or path parameters. It attempts to retrieve these parameters in a specific order (body, query, path) and assumes they are of type string.

  ## Data Existence:
    When fetching or updating a record, the API assumes that the name provided corresponds to an existing record in the database. It does not handle cases where the record does not exist.

  ## Database Interaction:
   The API assumes interaction with a database, likely a MongoDB database. It uses Mongoose methods for database operations, and users are expected to have a compatible database structure in place.

   ## Successful Responses:
   For successful operations, the API assumes a 200 OK status code and returns data in a JSON format. It also assumes that responses will include specific fields like name, _id, __v, and potentially others.

  ##  Logging:
  The API includes logging statements using console.log for debugging purposes. Users should be aware that these logs may appear in server logs during development and may need to be removed or replaced with proper logging mechanisms in production.

  ##  Response Consistency:
  The API maintains a consistent response structure, often returning data within a person object for successful operations and providing JSON error messages for failures.
# <a href="https://lucid.app/lucidchart/4b42b49f-41b4-457d-be6a-d409b782d5ea/edit?viewport_loc=-273%2C-335%2C1480%2C636%2C0_0&invitationId=inv_ed171752-f54a-468c-a136-a4e1e7c8abc4">UML diagram</a>

## Set Up

    Clone this repository : gitclone 'repo's url'
    Install node dependenices : npm i
    Setup a mongodb instance at Mongodb atlas or using a local instance of Mongodb
    create a .env file with the following fields:
        MONGO_URI = 'Mongodb connection Url'
        PORT = 'desired port number'

## Run

    Open terminal and run "npm rub start" or node index.js
    node index.js would start up the server but you would need to restart the server when you make changes

