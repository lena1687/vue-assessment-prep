# Vue 3 Utility App

A Vue 3 application demonstrating common frontend skills: reactive forms, API integration, table manipulation, and computed logic. This project currently includes four main pages/components: **Todo List**, **Users Table**, **Calculator**, and **Currency Converter**. Additional features may be added in the future.

---

## Features

### 1. Todo List
- Add delete tasks
- Mark tasks as complete or incomplete
- Reactive state updates using Vue 3 reactivity

### 2. Users Table
- Display a list of users fetched from 'jsonplaceholder.typicode.com' API
- Sortable by columns (e.g., name, email, email)
- Handles empty and loading states

### 3. Calculator
- Arithmetic operations
- Real-time result calculation using computed properties
- Responsive input handling

### 4. Currency Converter
- Convert between different currencies using Frankfurter API
- Input amounts for base and target currencies
- Reactive exchange rate calculations
- Error handling for API failures
- Loading states while fetching currency rates

---

## Tech Stack
- **Framework:** Vue 3 + Composition API
- **UI Library:** Vuetify 3 (form controls, tables, layout)
- **State Management:** Vue reactivity (`ref`, `computed`)
- **HTTP Requests:** Axios
- **Query Management:** @tanstack/vue-query
- **Styling:** Scoped CSS with Vuetify components
- **Prettier:** Code formatting

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lena1687/vue-assessment-prep.git
   
2. Install dependencies:
   ```bash
   cd vue3-utility-app
   npm install

3. Run the app in development mode:
   ```bash
    npm run dev

Open in browser: http://localhost:5173 (Vite default port)

## Key Concepts Demonstrated
- Vue 3 Composition API (`ref`, `reactive`, `computed`, `watch`)
- API fetching and error handling with Axios and Vue Query
- Form input handling and two-way binding (`v-model`)
- Table filtering, sorting, and conditional rendering
- Computed reactive calculations (calculator and currency converter)
- Scoped CSS styling with Vuetify 3 components

## Future Improvements
- Add **Pinia** for global state management
- Persist **Todo List** and currency preferences in local storage
- Add **unit tests** for components
- Enhance **responsive design** and accessibility

## License
This project is for **portfolio and learning purposes**. Free to use, modify, or extend.
