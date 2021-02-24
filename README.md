# MiniMarket Server
Serverless Infrastructure of MiniMarket App.
React implementation of MiniMarket App can be found in this [repo](https://github.com/agonqorolli/minimarket-client), 
and live hosting of such app can be found [here](https://main.d2jsglc8ny66a.amplifyapp.com/).

---

### How to test it

1. Create `.env` with corresponding variables. See `.env.example` for a reference.
1. Run `npm install` to install node packages.
1. Run `node ./src/index/js` to start the server locally.
   1. Alternatively, you can run `nodemon ./src/index/js` to provide hot reloading 
1. Navigate to ` http://localhost:4000/` to test predefined queries and mutations.

---

### How to deploy it

1. Make sure your `AWS CLI` is configured correctly.
1. Make sure your `Serverless CLI` is configured correctly.
1. Run `srs deploy` to deploy the corresponding `lambda` function, `API gateway` and `S3 bucket`.

---

### Infrastructure

![Serverless Infrastructure](https://github.com/agonqorolli/minimarket-server/blob/main/images/infrastructure.png)
