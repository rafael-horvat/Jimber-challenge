# Chat-Room

For a customer we maintain a decentralised application which includes chatting, storage and some kind of social media platform. Decentralised means (in this context), every user has his own (docker) container with his own files, a copy of each chat message send to each other and an instance of a node js application. When you send a message to another user in the UI, your container will communicate with the other persons container instead of a central database.

This is an advanced way for a chat application, therefore the knowledge of a 'normal' chat application is a good way to start. Below you'll find some requirements for a basic chat application. Completely free to do whatever unless specified. You can fork this into your own github or just create one or your own. Afterwards we'll look into it together.



## Requirements

1. As a User, I want to be able to create a User 
     - Fill out a chat name
2. As a not logged-in User, I should not be able to see any messages
3. As a User, I want to be able to log in
     - It can be any kind of login (it should be decently secure)
4. As a logged-in user, I want to be able to log out
5. As a logged-in user, I want to be able to send messages in a chat room
     - The message should be a maximum of 255 characters
7. As a logged-in user, I want to receive and see messages in real-time.


## Installing dependencies



First, you need to install all the needed dependencies.



```bash
$ cd frontend
$ npm install

```

```bash
$ cd backend
$ npm install

```



### Starting the application

After installing the dependencies, you can run the application using one of the following commands.



```bash

# Frontend

$ npm run serve



# backend

$ npm run start:dev


```



## Testing the application


After starting the application, you should see our layout when visiting http://localhost:8080 in your browser. After opening the application in multiple browser windows, you can test the functionality. 

## Demo
![alt text](https://github.com/rafael-horvat/Jimber-challenge/blob/main/frontend/public/Demo.gif?raw=true)
