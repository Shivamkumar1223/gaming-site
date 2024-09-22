WORKDIR /app/my-app

COPY package*.json ./
RUN npm install

COPY . .  # Ensure that my-app files are copied correctly

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
