# figher-advice-cms

This project was created using create-payload-app using the ts-blog template.

This is the CMS for the [Fighter Advice](https://github.com/Barbacoa08/fighter-advice) app by [barbajoe](https://rxresu.me/barbajoe/joseph-sebast-2023)

## Docker (untested)

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`
