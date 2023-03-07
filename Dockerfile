FROM node:16.16.0-alpine3.15

WORKDIR ./tinshemet

ENV PORT=80

COPY Tinshemet-client ./Tinshemet-client

RUN cd Tinshemet-client && npm i

ENTRYPOINT ["npm", "run", "dev"]
