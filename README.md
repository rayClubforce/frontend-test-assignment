# Frontend Assignment
The task for you is to create an application that displays posts and allows a user to create posts.  The public api to save and retrieve your data is here: https://jsonplaceholder.typicode.com/guide/.  You will use Angular, Bootstrap, Jest, RxJs and NgRx libraries.  Optionally, you will use the Cypress and Nx libraries.

## Technologies required
Angular v14, RxJs, NgRx, Sass, HTML, Bootstrap

## Optional technologies
Nx, Cypress

### Requirements and guidelines
- Angular v14
  - Component classes
    - Do not inject the api service class in any component class!
    - Only use pure function methods
    - Do not use subscribe() to access data from the ngrx selector
    - Use Post and Posts interfaces to strongly type service/ngrx
    - Type all method return types
- NgRx store
  - commit posts list and post detail page data to the state
  - expose actions/selectors to component (and optionally, resolvers)
- Sass, Bootstrap
  - UI must have basic reactive view for a small/mobile screen size
- Jest
  - Write unit tests for 'create' component class and mock one observable
- Explain your coding process with inline comments
- Write your code for readability

## Your application should contain
- A menu with the links: "Posts" and "Create Post"
- List posts page
	- Filter posts by title text input 
    - Call the api endpoint with filter value and display results
	- Refresh the filtered results when user stops typing after 500ms
  - Link each displayed post to the post's details page
- Post details page
  - Do not use the InputDecorator in the component class
- Create post page
  - Title and Body text inputs - both required
	- Validate that the new post tile starts with the letter 'x'
  - Show validation error
  - Redirect to the "List posts" page After ngrx 'create' action Is Successful


## Bonus
- Use destructuring and arrow functions to improve readability
- Use Nx to hide the service from the component classes
- Create usecases and entity classes to encapsulate business rules (title validation)


