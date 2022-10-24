# Universities

Application for avaliation to the team Bis2Bis E-Commerce.

## Installation

Use the [npm](https://www.npmjs.com/) to install.

```bash
git clone https://github.com/jaxolv/universities.git
cd universities
npm install
```

## Run

To run the application, you must create a file [.env](https://www.npmjs.com/package/dotenv) inside the folder `universities`:

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
  "message": "The database was succesfully populated!"
}
```

This request will not be executed again if the database have any information saved. So, be sure to use it at first.

`POST /universities`

This request will create an university.

Example:
```json
{
    "domains": [
        "www.akad.de"
    ],
    "country": "Germany",
    "state-province": null,
    "web_pages": [
        "www.akad.de"
    ],
    "name": "AKAD Hochschulen f\u00fcr Berufst\u00e4tige",
    "alpha_two_code": "DE"
}
```

This request will not succeed if informed the exact same data from an university already existent in the database.

`GET /universities`

This request will return all the universities in the database.

It is possible to find the universities of a country informing as a query  `country` one of those countries:

```bash
[
    "argentina", 
    "brazil", 
    "chile", 
    "colombia", 
    "paraguay", 
    "peru", 
    "suriname", 
    "uruguay"
]
```

`GET /universities/:id`

This request will return an unique university found by the ID informed.

The ID have to be informed as a param and will return all the data from the university.

`PUT /universities/:id`

This request will update some of the data from the university that will be found by the ID.

Example:
```json
{
    "domains": [
        "akad.de"
    ],
    "web_pages": [
        "http://www.akad.de/"
    ],
    "name": "AKAD Hochschulen f\u00fcr Berufst\u00e4tige, Fachhochschule Leipzig"
}
```

The ID have to be informed as a param and will return only the updated data.

`DELETE /universities/:id`

This request will remove the university that will be found by the ID informed.

This should be the message you receive when executed correctly:
```json
{
  "message": "University deleted succesfully."
}
```

The ID have to be informed as a param.
