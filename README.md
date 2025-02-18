## 1  Copy ```.env.example``` to your .env

## 2. Start Docker

To apply the changes to the database URL, follow these steps to restart the containers:

```bash
docker-compose up --build -d
```

## 3. Make Prisma migrations

```bash
docker exec -it node-server sh
npx prisma migrate deploy
```
## 3. Open docimentation

```bash
http://localhost:3000/api
```
