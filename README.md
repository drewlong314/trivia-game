# Trivia Game

### Goal
- Practice using GO for the backend of a web application.

## Todo

### Backend
- Create a mongodb database that holds questions
- Create routes to interact with the database
    - GET /questions - return all questions
    - POST /questions - create a new question
    - PATCH /questions/:id - update a question
    - DELETE /questions/:id - delete a question

### Frontend
- Clean up folder from create-react-app
- User can see a list of questions with the answers hidden
- User can select a question to update it and it's answers
- User can delete a question
- User can start the game and have the list of questions appear one     after another until all questions have been seen
- When a user selects an answer, they receive feedback on if they were correct
- When the user completes all the questions, the amount of questions they answered correctly is presented to them. ex: 8/10 questions correct

### Deployment
- Docker
- Find a replacement for Heroku

### Database Schema
```
questions = {
    id: ObjectId,
    title: string,
    answers: array,
    correct_answer: string,
}
```

### Nice to haves
- Group questions into categories or subsets
- Multiplayer
