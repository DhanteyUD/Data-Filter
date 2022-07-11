# Data-Filter
A simple react app that filters data by their types or status of data with a specific filter component and also can be searched through with a search box.

Run `npm start` to start app

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

> The loading state was handled with react `useState` hook. Initially set to false, the loading state is updated to true when the `GraphQL` API is bei called

![Screen Shot 2022-07-11 at 1 34 32 AM](https://user-images.githubusercontent.com/85023604/178176217-c21fba21-ec0b-4ae9-9ddc-31b88e97a325.png)

## 3. Data

`30` data 

