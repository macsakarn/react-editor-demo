FROM node:19-alpine AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
# 2nd Stage
FROM nginx:1.14.2-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]