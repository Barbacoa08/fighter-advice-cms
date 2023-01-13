This project was created using `npx create-payload-app` using the [ts-blog template](https://payloadcms.com/docs/getting-started/installation).

# figher-advice-cms

This is the CMS for the [Fighter Advice](https://github.com/Barbacoa08/fighter-advice) app by [barbajoe](https://rxresu.me/barbajoe/joseph-sebast-2023)

## how to Use

- `yarn all`: will run everything. Install, build, tests, ect
- `yarn start`: will start up localhost on port 3000
- `yarn generate:types`: generates `payload-types.ts` which the `fighter-advice` site imports

## docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`

## tech resources

- [Payload CMS](https://payloadcms.com/docs/getting-started/what-is-payload)
- [Northflank](https://app.northflank.com/) ([payload+northflank tutorial](https://northflank.com/guides/deploying-payload-cms))
- [MongoDB Atlas](https://www.mongodb.com/cloud)
