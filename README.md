# Universities

App for avaliation to the team Bis2Bis E-Commerce.

## Installation

Use the [npm](https://www.npmjs.com/) to install.

```bash
git clone https://github.com/jaxolv/universities.git
cd universities
npm install
```

## Run

To run the application, it has to be created a file [.env](https://www.npmjs.com/package/dotenv) inside the folder `universities`. Use as example the file `.env.example` to inform the sensible data to connect with the database.

The database was created in MongoDB Atlas, so it has to be informed `user`, `password`, `port` and, most importantly, the `key`, wich is the link informed when you choose to `Connect > Connect your aplication` after created a cluster.

Inform in the file `.env` the key as follow the example:

```bash
# PARAMS TO CONECTION - MONGODB
DB_PORT=8888
DB_KEY='mongodb+srv://<USERNAME>:<PASSWORD>@nameoftheapi.example.mongodb.etc'
```

In `DB_KEY`: for `<USERNAME>` and `<PASSWORD>` has to be informed, respectively, the username and the password used in the creation of the database. The rest of the key has to be the same as copied originally.

In `DB_PORT`: has to be informed the port used to run the application. In the example, `8888` it's the one that I used.

After that, it is possibly to save and run the API in the terminal:

```bash
npm start
```

If `Connected to MongoDB!` appears in the terminal, it's everything okay to run.

To the API tester software (like INSOMNIA or POSTMAN), use the port informed on the `.env` file. Example: `http://localhost:8888`.

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

It is possible to find the universities of a country informing as a query `country` one of those countries:

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

The ID have to be informed as a param and will return only the body requested.

`DELETE /universities/:id`

This request will remove the university that will be found by the ID informed.

If executed correctly, the message `University deleted succesfully.` will be returned.

The ID have to be informed as a param.
