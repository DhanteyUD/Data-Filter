# Data-Filter
A simple react app that filters data by their types or status of data with a specific filter component and also can be searched through with a search box.

Run `npm start` to start app

## Click on this <a href="https://df-clinton-otse.netlify.app/">Link<a> to demo app

### 1. React Hooks used:
- [x] useState
- [x] useEffect

### 2. GraphQL API used:

https://api.spacex.land/graphql/

### 3. Data is filtered by:

- [x] Searching data via `search box`
- [x] Clicking any of the filter buttons 
  
  ### How it works:
  
  Each filter button has an `onClick` function which updates the data state. In order to call this function `onChange` when a user enters a search     word, a header is being passed and used to check each `handleChange` functions for that header. If the header matches, that `onClick` function is then     called during `onChange` thus filtering data by that selection.

---
## App functions and Implementations

### 1. Error Handling

> Errors where handled using react `useState` hook - by updating the initial state with the error message received and rendering it on the screen
  
![Screen Shot 2022-07-11 at 9 42 08 AM](https://user-images.githubusercontent.com/85023604/178226675-5660c2bc-503c-4cb7-a2f4-655fd3423e05.png)

## 2. Loading State

> The loading state was handled with react `useState` hook. Initially set to false, the loading state is updated to true when the `GraphQL` API is being called

https://user-images.githubusercontent.com/85023604/178226812-80bcf3f4-f319-4a73-9bb0-d0b2c5eb5f25.mov

## 3. Data

using the below query, a limit of `30` was applied to get the needed data, which is then used to populate the app

```js
query {
  launchesPast(limit: 30) {
    mission_name
    details
    id
    launch_date_local
    launch_year
    links {
      wikipedia
    }
    launch_site {
      site_name
    }
  }
}
```
  
![Screen Shot 2022-07-11 at 9 44 02 AM](https://user-images.githubusercontent.com/85023604/178227208-f4e05593-e21a-4e17-847b-57fc344f97fc.png)

## Extra

- [x] on search, the length of data is returned
- [x] on search, the `data` being filtered is displayed above the `id` field
- [x] the `Go to Search` button was added to quickly take user to the `search box`
- [x] app deployed to `Netlify` 
  
  > https://df-clinton-otse.netlify.app/
  
  
- [x] Night/Day mode implemented 
- [x] fully mobile responsive

![Screen Shot 2022-07-11 at 2 28 52 AM](https://user-images.githubusercontent.com/85023604/178210385-7d8baa37-2b67-4ed8-86b8-76bc7899da5e.png)

## How can this App can be Improved?
  
  I believe this app can be improved by persisting state for each filter in order to preserve the state on window refresh. 
  
  # Thank you,
  
  <a href="https://github.com/DhanteyUD">Clinton Otse</a>

