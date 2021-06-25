# adform-tasks
Solutions to adform technical tasks


## The repository consists of separate folders containing each task respectively.

* Task 1: For task 1 go to task1 folder and run `npm install` followed by `npm run start`. The start command runs node with only 16 MB of memory.

* Task 2: For task 2 go to task2 folder and run `docker-compose up` followed by `npm install` and `npm run start`. Docker is needed as the queue mechanism uses Redis. After starting the app, go to http://localhost:3000 and you can assign the highest priority to any of the 100 requests that will be sent on button click. We use a key to trace each request.