# TodoList API
RESTful API for a Todo App using Node.js and implementing JWT (JSON Web Token)
authentication. The API should allow users to create, read, update, and delete tasks, as well as authenticate and manage their
tasks using JWT

# Getting Started

To get started with the project, you will need to install Node.js and npm. Once you have installed Node.js and npm,
you can clone the project from GitHub:

Once you have cloned the project,  the dependencies automatically get instaled:

# npm install

# Notice :
<h5> You need to edit environment variable file with your mongodb database string URL </h5>

# Start the project

<h5> <em> npm start </em> </h5>

<br></br>

# This is a code block.

```js


Signup API "Refer to the image after link"
http://localhost:5000/signup 

![image](./server/images/signup.png)

Login Api "Refer to the image after link"
http://localhost:5000/signin 

![image](./server/images/signin.png)

# Token is required to accese those Api 
[ You get the token from Login Api ]

Add Todo-list Api "Refer to the image after link"
http://localhost:5000/user/add-task

![image](./server/images/auth%20token.png)

![image](./server/images/add%20task.png)

All Todo-list Api "Refer to the image after link"
http://localhost:5000/user/all-tasks 

![image](./server/images/all%20tasks.png)

Todo-list Search Api "Refer to the image after link"
http://localhost:5000/user/get-task/{id}

![image](./server/images/find%20by%20id.png)

Todo-list Delete Api "Refer to the image after link"
http://localhost:5000/user/delete-task/{id}

![image](./server/images/delete%20task.png)
Todo-list Update Api
http://localhost:5000/user/update-task/{id}

![image](./server/images/update.png)

Pagination Api "Refer to the image after link"
http://localhost:5000/user/tasks?pageNumber=1&limit=4

![image](./server/images/pagnation%20api.png)

Searching Api
http://localhost:5000/user/search/{query}



