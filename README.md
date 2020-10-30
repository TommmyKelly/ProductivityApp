# ProductivityApp

An app with a couple of boards that includes a calander, notes board with html markdown, stopper to make sure that you get up from that sit every once in a while and more on the way.

The design will be similar to trello and kinda figmatic. Since I'm not a designer, I can't really create a good design so you are free to design however you like. 
This is a React practice app so we don't need to make it look the best.
We'll try to keep it professioanl just to feel like it's a real life project

```
App
|__NavigationBar
|  |__Logo
|  |__NavigationLinks
|     |__NavigationLink
|
|__NoteBoard
| |__Notes
| |   |__Note
| |     |__Text
| |__NoteForm
| |  |__Input
| |__AddNoteButton
|
|__CalanderBoard
|   |__Have no idea rn
|
|__StopperBoard
    |__Have no idea rn
```
    
First we'll start by working on the notes board and navigation

# Development
1. Please keep the folder structure consistent.
2. Use PropTypes for the different components.
3. Use the 1 role principle.
4. If a class component only have a render method, turn it into a functional component
5. Each time you work on a new issue create a branch named `-` + the number of the issue.
6. If you need to work on a something that needs something from a branch that is not merged yet, create a new branch out of that unmerged branch.
7. Try to work on only the branch's component unless it's really necessary.
8. Each time you are finished with a branch, create a pull request, DON'T merge it directly

Links to libraries that we'll use:
https://www.npmjs.com/package/react-markdown \
https://www.npmjs.com/package/react-codemirror2 (Maybe) \
https://www.npmjs.com/package/react-draggable \
https://www.npmjs.com/package/redux \
https://www.npmjs.com/package/redux-thunk \
https://www.npmjs.com/package/react-router \
https://www.npmjs.com/package/react-router-dom \
https://www.npmjs.com/package/react-transition-group \
