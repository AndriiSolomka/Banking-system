## 1. Clone repository
```bash
git clone https://github.com/AndriiSolomka/Banking-system.git
```
## 2. Make  ```npm install``` 

## 3.  Copy ```.env.example``` to your .env

## 4. Start Docker

To apply the changes to the database URL, follow these steps to restart the containers:

```bash
docker-compose up --build -d
```

## 5. Make Prisma migrations

```bash
docker exec -it node-server sh
npx prisma generate
npx prisma migrate deploy
```
## 6. Open docimentation

```bash
http://localhost:3000/api
```
