#### To run this app, it will be necessary to install Docker and Node.js previously.


#### Before run.

1. Start database service

    ```bash
    npm run services:up
    ```
    
2. Run migrations

    ```bash
    npx prisma migrate deploy
    ```

#### Running the app

```bash
npm run dev
```

It will be available at [localhost:3000](http://localhost:3000) by default.

#### Checking application status

GET [localhost:3000/api/status](http://localhost:3000/api/status)

#### Environment variables
Copy and paste into the .env file.

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=password
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```