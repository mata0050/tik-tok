 # Getting Started

This is a creddle clone project built using the following technology ***NextJs***, ***Tailwind***, ***Prisma***, ***MySQL***, ***Typescript***, ***NextAuth***
## Step 1

install dependencies

```bash
  npm install
```

## Step 2

Create an account a [planetscale.com](https://planetscale.com/) and create a new database called **_tik-tok_**. Go to your terminal and login using:

```bash
  npm run db:login
```


## Step 3
Add Next Auth secrets check the example.env

## Step 4

Push prisma scheme to Database

```bash
  npm run db:push
```

## Step 5

Connect to Database

```bash
  npm run db:connect
```

## Step 6

Start app

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 


![Tik Tok](https://user-images.githubusercontent.com/58061791/183218450-7cade322-a8bf-4882-b4f0-a91d1da67c0b.png)

## 

![Tik Tok upload page](https://user-images.githubusercontent.com/58061791/183219187-3fdd1354-4551-4eef-8fd9-17a4389e3545.png)

## Features to work on

- [ ] User Should be able to edit, delete their posts.
- [x] User public page where user can change profile settings.
- [ ] Side Bar Discover links should link to discover page.
- [ ] Search Bar
- [ ] Add Followers for users
