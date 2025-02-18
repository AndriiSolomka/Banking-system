## 1. Clone repository
```bash
https://github.com/AndriiSolomka/Banking-system.git
```
## 2.  Copy ```.env.example``` to your .env

## 3. Start Docker

To apply the changes to the database URL, follow these steps to restart the containers:

```bash
docker-compose up --build -d
```

## 4. Make Prisma migrations

```bash
docker exec -it node-server sh
npx prisma migrate deploy
```
## 5. Open docimentation

```bash
http://localhost:3000/api
```
