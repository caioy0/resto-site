# Usa a imagem oficial do Node.js
FROM node:18-alpine  

# Define o diretório de trabalho
WORKDIR /app  

# Copia os arquivos do projeto
COPY package.json ./
RUN npm install  

# Copia o restante do código
COPY . .  

# Expõe a porta 3000 para o site
EXPOSE 3000  

# Inicia o servidor
CMD ["npm", "run", "dev"]
