# backend-template-ts-mongoose

In the cloned folder, run the following commands:

`npm install`

`touch ./.env`

In the `.env` file create the following envs:

-   `PORT` for the desipred port
-   `NODE_ENV` to denote the production env for the application (doesn't really matter)
-   `AWS_ACCESS_KEY_ID` for the access key
-   `AWS_SECRET_ACCESS_KEY` for the secret key
-   `AWS_ENDPOINT` the endpoint from the cloudflare state
-   `AWS_BUCKET` for the bucket name

To start the application, run `npm run start`.

To start the application with restart on file changes, run `npm run dev`
