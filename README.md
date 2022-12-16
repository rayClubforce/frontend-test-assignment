# Frontend Assignment
The task for you is to create an application that displays posts and allows a user to create posts.  The public api to save and retrieve your data is here: https://jsonplaceholder.typicode.com/guide/.  You will use Angular, Bootstrap, Jest, RxJs and NgRx libraries.  Optionally, you will use the Cypress and Nx libraries.

## Technologies required
Angular v14, RxJs, NgRx, Sass, HTML, Bootstrap

## Optional technologies
Nx, Cypress

### Requirements and guidelines
- Angular v14
  - Component classes
    - Only use pure functions/methods
    - Do not use subscribe()
    - Do not inject the api service class
    - Use Post and Posts interfaces
- NgRx store
  - commit posts list and post detail page data to the state
  - expose actions/selectors to component (and optionally, resolvers)
- sass, Bootstrap
  - UI must closely follow the included screenshots
  - UI must have basic reactive view for a small/mobile device screen size
- jest
  - Write unit tests for 'create' component class and mock one observable
- Explain your code with inline comments
- Write your code for readability

## Your application should contain
- A menu with the links: "Posts" and "Create Post"
- List posts page
	- Filter posts by title using a text input 
	- Refresh the search results when user stops typing after 500ms
  - Each List item should contain a link to the item's details page
- Post details page
- Create post page
  - Title and Body text inputs - both required
	- Validate that the new post tile starts with the letter 'x'
  - Show validation error 


## Bonus
- Use Nx to hide the service from the component classes
- Create usecases and entity classes to encapsulate business rules (title validation)


