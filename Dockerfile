FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY ./package.json /app

# Install dependencies in /app
RUN yarn install

# Copy the rest of our Next.js folder into /app
COPY . /app

RUN yarn run build

CMD [ "pm2-runtime", "npm", "--", "start" ]

# Run yarn dev, as we would via the command line
CMD ["yarn", "build"]
CMD ["yarn", "start"]