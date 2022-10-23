# Universities

Application for avaliation to the team Bis2Bis E-Commerce.


## Installation

Use the [npm](https://www.npmjs.com/) to install.

```bash
git clone https://github.com/jaxolv/universities.git
cd universities
npm install
```

## API endpoints

To see how the API must work, run here:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23352447-4f1a1cc6-214b-4493-bfac-cd558af271c2?action=collection%2Ffork&collection-url=entityId%3D23352447-4f1a1cc6-214b-4493-bfac-cd558af271c2%26entityType%3Dcollection%26workspaceId%3Dd8639506-d2bf-4cd4-8206-57d775d5182a)


## Run

To run the application, you must create an file [.env](https://www.npmjs.com/package/dotenv) inside the folder `universities`:

```bash
./universities/.env
```

Then, use as example the file ```.env.example``` to inform the sensible data to connect with the database. Chose a port, inform your username to the connection with MongoDB's system and the password created (these last two, in the format `string`).

Example:
```bash
# PARÂMETROS DE CONEXÃO - MONGODB
DB_PORT=0000
DB_USER='<username>'
DB_PASS='<password>'
```

After that, you can save and run the API in the terminal:

```bash
npm start
```

You should receive this message:
```bash
Connected to MongoDB!
```

To the API tester, use the port informed.

As the example: `http://localhost:0000`.

## Usage overview

`POST /universities/populate`

This request will populate the database with all the data from the 1020 universities.

This should be the message you receive when executed correctly:
```json
{
  "message": "All universities were succesfully merged!"
}
```

This request will not be executaded again.

`POST /universities`

This request will create an university.

Example:
```json
{
    "domains": [
        "www.universidadedemunique.br"
    ],
    "country": "Alemanha",
    "state-province": null,
    "web_pages": [
        "http://www.universidadedemunique.br/"
    ],
    "name": "Universidade de Munique",
    "alpha_two_code": "ge"
}
```

This request will not succeed if informed the same data from an university already existent in the database.


`GET /universities`

This request will return all the universities in the database.

`GET /universities/search`

This request will return all the universities from the informed country.

The country have to be informed as a query.

Example the URL field:
```bash
GET /universities/search?country=uruguay
```

`GET /universities/:id`

This request will return an unique university found by the ID informed.

The ID have to be informed as a param.

Example the URL field:
```bash
GET /universities/000000000000000000000000
```


`PUT /universities/:id`

This request will update some of the data from the university that will be found by the ID.

Example:
```json
{
    "domains": [
        "www.universityofmunich.br/"
    ],
    "web_pages": [
        "http://www.universityofmunich.br/"
    ],
    "name": "University of Munich"
}
```

The ID have to be informed as a param.

`DELETE /universities/:id`

This request will remove the university that will be founded by the ID informed.

This should be the message you receive when executed correctly:
```json
{
  "message": "All universities were succesfully merged!"
}
```

The ID have to be informed as a param.
