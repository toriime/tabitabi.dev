FROM node:23-alpine3.21

WORKDIR /home/app/s3rver

COPY ./packages/s3rver .

RUN npm i -g pnpm

RUN pnpm install

CMD ["pnpm", "run", "dev"]