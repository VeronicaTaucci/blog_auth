# Blog assignment

In this assignment you are going to create a blog application using sequelize as your ORM and postgres as your database. Here are the features you will implement:

Ability to create a new post (title, body, date_created, date_updated, is_published)

## Requirements 
- Ability to view all blogs 
- Ability to delete a blog 
- Ability to update a blog 
- Add the ability to allow the users to create an account
- Add the ability to allow the users to login
- Add the ability to associate a user with a blog post
- User should be able to view all his/her blog posts

## Install
- git clone https://github.com/veros-labs/lab-sequelize-auth-blog.git 
- navigate into the sequelize-auth-blog repository
- run `npm install` 
- run `nodemon app.js` to see your starter template

## Tables

### users schema
> **id** - SERIAL PRIMARY KEY
> 
> **firstName** - varchar(20) 
> 
> **lastName** - varchar(20) 
> 
> **email** - varchar(50) 
> 
> **date_created** - timestamp default current_timestamp 
> 
> **date_updated** - timestamp default current_timestamp 
> 
> **is_published** - boolean default False 

### blogs schema
> **id** - SERIAL PRIMARY KEY
> 
> **title** - varchar(200) 
> 
> **body** - Text
>
> **userID** - integer (foreign key) 
> 
> **date_created** - timestamp default current_timestamp 
> 
> **date_updated** - timestamp default current_timestamp 
> 
> **is_published** - boolean default False 


### Requirements
- Display all blogs on front page 
- Click on title on front page and show the blog details


### Authentication
user should be able to
- register for a new account 
- registered users should be able to see all blogs and blog details 
- unregistered user directed to login page (can't see list of blogs)
- on admin page, blog owners are able to see this page. They should be able  to submit a new blog, edit an existing blog or delete a blog




    
