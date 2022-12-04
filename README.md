# Data-Filter
A simple react app that filters data with a specific filter component and also can be searched through with a `search box` or `#tag`.

1. `cd data-filter`

2. Run `npm install` to install dependencies

3. Run `npm start` to start app

## Click on this <a href="https://df-clinton-otse.netlify.app/">Link<a> to demo app

### 1. React Hooks used:
- [x] useState
- [x] useEffect

### 2. GraphQL API used:

https://api.spacex.land/graphql/

### 3. Data is filtered by:

- [x] Searching data via `search box`
- [x] Clicking any of the filter buttons and searching data via `search box` filters data based on that header
- [x] Clicking any of the `#tags` for a quick filter
  
  ### How it works:
 
  Each filter button has an `onClick` function which updates the data state. In order to call this function `onChange` when a user enters a search            word, a header is being passed and used to check each `handleChange` functions for that header. If the header matches, that `onClick` function is then      called during `onChange` thus filtering data by that selection.
 
  Clicking any of the `#tags` simple sends the data header through an `onChange` function to the `handleHashChange` function where the data is checked for    a match and all data matching that header is returned.
  

---
## App functions and Implementations

### 1. Error Handling

> Errors where handled using react `useState` hook - by updating the initial state with the error message received and rendering it on the screen
  
![Screen Shot 2022-07-11 at 9 42 08 AM](https://user-images.githubusercontent.com/85023604/178226675-5660c2bc-503c-4cb7-a2f4-655fd3423e05.png)

## 2. Loading State

> The loading state was handled with react `useState` hook. Initially set to false, the loading state is updated to true when the `GraphQL API` is being called

https://user-images.githubusercontent.com/85023604/178592576-f9c23b92-eb06-4b14-baf8-dd45c7a8c1a8.mov 

## 3. Data

using the below query, a limit of `30` was applied to get the needed data, which is used to populate the app

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
![Screen Shot 2022-07-12 at 9 54 05 PM](https://user-images.githubusercontent.com/85023604/178593423-d04f2db1-6546-4fea-8f03-d1ddcc6c0458.png)

## Extra

- [x] On search, the length of filtered data is returned
- [x] On search, the data being filtered is displayed above the `id` field
- [x] The `Go to Search` button quickly take user to the `search box` 
- [x] App deployed to `Netlify` 
  
  > https://df-clinton-otse.netlify.app/
  
  
- [x] Night/Day mode 
- [x] Mobile responsive
  
![Screen Shot 2022-07-12 at 10 00 26 PM](https://user-images.githubusercontent.com/85023604/178594478-8f3e3ead-e174-41a0-b34a-71b47d332bf5.png)

## How can this App can be Improved?
  
  1. By persisting state for each filter in order to preserve the state on window refresh. 
  
  2. By implementing pagination to limit displayed data to fit screen viewers height thus improving user interaction with app.
