# Utiliser Node 22
FROM node:22

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code (utile si docker-compose ne monte pas de volume)
COPY . .

# Exposer le port du serveur React
EXPOSE 3000

# Lancer le serveur de développement Vite
CMD ["npm", "run", "dev", "--", "--host"]
