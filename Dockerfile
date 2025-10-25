FROM node:22.18.0-alpine


WORKDIR /app


COPY *.json ./
RUN npm install 


COPY . .

RUN npm run build
# RUN npm prune --production

EXPOSE 3001

# Serve the built app
CMD ["npx", "serve", "-s", "dist", "-l", "3001", "-n"]