
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
```
