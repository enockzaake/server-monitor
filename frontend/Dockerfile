FROM node:latest as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm","run","dev"]

# FROM nginx:alpine

# # Remove the default Nginx website
# RUN rm -rf /usr/share/nginx/html/*

# # Copy the built React app from the build stage to Nginx's default public directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 3000 to the outside world
# EXPOSE 3000

# # Command to run Nginx in the foreground
# CMD ["nginx", "-g", "daemon off;"]
