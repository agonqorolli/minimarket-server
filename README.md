# MiniMarket Server
Serverless Infrastructure of MiniMarket App

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


