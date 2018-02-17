# Contact Searcher


Full-stack contacts app with search capabilities interfacing with RESTful API
<br>

## About

This app is a full MERN  (MongoDB + Express + React + Node) build setup to be hosted locally

- NOTE: You will need [MongoDB](https://www.mongodb.com) installed and running a [MongoDB Database Server](https://www.mongodb.com/download-center#community)
<br>

## Features

- Hosted and run locally
- Visually pleasing
- Styled UI/UX
- Code architecture
- Appropriate patterns via component use
- Tested till it didn't break
- Clean, maintainable, and commented code
<br>

## Starting Locally

Install dependencies in root directory:
```
yarn install
```

Seed database (optional):
- NOTE: MongoDB Database Server must be running
```
yarn seed
```

Install dependencies in client directory:
```
cd client
yarn install
```

Once complete run from terminal in root directory:
```
cd ..
yarn start
```


That's it!
Contact Searcher App should be running on <http://localhost:3000>.
RESTful API should be running on <http://localhost:3001/api>