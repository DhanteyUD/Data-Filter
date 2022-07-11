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

---
## App functions and Implementations

### 1. Error Handling

> Errors where handled using react `useState` hook - by updating the initial state with the error message received and rendering it on the screen

![Screen Shot 2022-07-11 at 1 33 17 AM](https://user-images.githubusercontent.com/85023604/178175216-c971b345-ee81-448a-98c8-02a74366032a.png)

## 2. Loading State

> The loading state was handled with react `useState` hook. Initially set to false, the loading state is updated to true when the `GraphQL` API is being called

![Screen Shot 2022-07-11 at 1 34 32 AM](https://user-images.githubusercontent.com/85023604/178176217-c21fba21-ec0b-4ae9-9ddc-31b88e97a325.png)

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

![Screen Shot 2022-07-11 at 1 32 30 AM](https://user-images.githubusercontent.com/85023604/178209397-a8dc55cc-5b5a-4b41-bce9-4473dbd537b1.png)

## Extra

- [x] on search, the length of data is returned
- [x] on search, the component being filtered is displayed above the `id` field
- [x] the `Go to Search` button was added to quickly take user to the `search box`
- [x] mobile responsive
- [x] app deployed to `Netlify` 
  
  > https://df-clinton-otse.netlify.app/

![Screen Shot 2022-07-11 at 2 28 52 AM](https://user-images.githubusercontent.com/85023604/178210385-7d8baa37-2b67-4ed8-86b8-76bc7899da5e.png)



