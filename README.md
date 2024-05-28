# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```
2. Renombrear el .env.template a .env
3. Reemplazar los valores de las variables de entorno en el .env
4. ejecutar el SEED para [crear la base de datos local] (localhost:3000/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```



# Prod


# Stage