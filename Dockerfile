FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --no-optional && npm cache clean --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
