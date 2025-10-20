# Stage 1 : build de l'app React avec Vite
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 : serveur Nginx
FROM nginx:alpine
# Vite génère le dossier 'dist', pas 'build'
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]