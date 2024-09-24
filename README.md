# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```
2. Crear una copia del .env.template, y renombrarlo a .env
3. Reemplazar los valores de las variables de entorno en el .env
4. Ejecutar el comando ``` npm install```
5. Ejecutar el comando ``` npm run dev```
6. Ejecutar estos comando de prisma
```
npx prisma migrate dev
npx prisma generate
```

7. ejecutar el SEED para [crear la base de datos local] (localhost:3000/api/seed)

## Nota: Usuario por defecto
__usuario:__ test@test.com
__password:__ 123456
# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
