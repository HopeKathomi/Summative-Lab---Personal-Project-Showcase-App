# ☕ Coffee R Us

Coffee R Us is a React-based coffee product management application. The application allows users to browse coffee products, search for specific coffees, and provides an administrator interface for adding, editing, and deleting coffee products.

The project uses **React**, **React Router**, **Context API**, **Tailwind CSS**, and **JSON Server** to create a simple full-stack-style CRUD application.

---

## 🚀 Features

### Customer Features

* View the Coffee R Us landing page
* Browse available coffee products
* Search for coffee products
* Filter coffee products using the search field
* View coffee name, description, origin, and price

### Administrator Features

* View all coffee products
* Add new coffee products
* Delete existing coffee products
* Edit existing coffee products
* Manage coffee data through a JSON Server API

---

## 🛠️ Technologies Used

* **React** – Frontend JavaScript library
* **React Router** – Client-side routing
* **Context API** – Sharing application state between components
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useContext`
* **Tailwind CSS** – Styling and responsive layouts
* **Fetch API** – Communicating with the backend
* **JSON Server** – Mock REST API
* **Vite** – Development and build tool

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── common/
│   │   └── Nav.jsx
│   │
│   ├── pages/
│   │   ├── Add.jsx
│   │   └── Edit.jsx
│   │
│   ├── Administrator.jsx
│   ├── Landingpage.jsx
│   ├── Product.jsx
│   ├── ProductList.jsx
│   └── Search.jsx
│
├── App.jsx
└── main.jsx

db.json
package.json
README.md
```

---

## 📊 Coffee Data

The application uses JSON Server as a simple backend.

A coffee object has the following structure:

```json
{
  "id": 1,
  "coffee_name": "Kenyan AA",
  "description": "A rich and aromatic coffee with bright acidity.",
  "origin": "Kenya",
  "price": 850
}
```

The coffee data is stored in `db.json`:

```json
{
  "coffees": [
    {
      "id": 1,
      "coffee_name": "Kenyan AA",
      "description": "A rich and aromatic coffee.",
      "origin": "Kenya",
      "price": 850
    }
  ]
}
```

---

# 🧠 Application Architecture

The application is divided into several major parts:

```text
                    App
                     │
             ┌───────┴────────┐
             │                │
        UserContext       React Router
             │                │
      ┌──────┼──────┐     ┌───┼─────────────┐
      │      │      │     │   │             │
   coffees  Create Delete  /  /products  /administrator
                              │             │
                         ProductList    Administrator
                              │             │
                     ┌────────┴──────┐   ┌──┴─────┐
                     │               │   │        │
                   Search         Product Add    Edit
```

---

# 🔄 Fetching Coffee Data

The application retrieves coffee data when the application loads.

In `App.jsx`, `useEffect()` is used:

```jsx
useEffect(() => {
  fetch('http://localhost:3000/coffees')
    .then(response => response.json())
    .then(data => getCoffee(data));
}, []);
```

### How it works

1. The application loads.
2. `useEffect()` runs once.
3. `fetch()` sends a GET request to JSON Server.
4. JSON Server returns the coffee data.
5. The response is converted to JSON.
6. `getCoffee(data)` stores the data in React state.

The state is initially:

```jsx
const [coffees, getCoffee] = useState([]);
```

---

# 🌐 Context API

The application uses React Context API to make coffee data and functions available to multiple components.

A context is created in `App.jsx`:

```jsx
export const UserContext = createContext(null);
```

The data and functions are then provided through:

```jsx
<UserContext value={{
  coffees,
  handleDelete,
  handleCreate
}}>
```

Components can access this information using `useContext()`.

For example:

```jsx
const { coffees, handleDelete } = useContext(UserContext);
```

This avoids having to pass the same data through multiple levels of components using props.

---

# 🔎 Search and Filtering

The product page uses a second context to share the search value between the `Search` and `Product` components.

```jsx
export const SearchUserContext = createContext();
```

The search state is maintained in `ProductList`:

```jsx
const [searchWord, setSearchWord] = useState("");
```

The `Search` component updates the state:

```jsx
function handleChange(e) {
  setSearchWord(e.target.value);
}
```

The `Product` component then uses `.filter()` and `.includes()`:

```jsx
coffees
  .filter(coffee =>
    coffee.coffee_name
      .toLowerCase()
      .includes(searchWord)
  )
  .map(coffee => (
    // Display coffee
  ))
```

### Example

If the user searches:

```text
Kenyan
```

The application checks:

```js
"Kenyan AA".toLowerCase().includes("kenyan")
```

which returns:

```js
true
```

Therefore, the coffee is displayed.

---

# ➕ Adding Coffee Products

The `Add` component contains a controlled form.

The form data is stored in state:

```jsx
const [data, setData] = useState({
  coffee_name: "",
  description: "",
  origin: "",
  price: 0
});
```

When the user types into an input, `handleChange()` updates the state:

```jsx
function handleChange(e) {
  const { name, value } = e.target;

  setData(prevData => ({
    ...prevData,
    [name]: value
  }));
}
```

When the form is submitted:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  handleCreate(data);
}
```

The data is sent to JSON Server using a POST request:

```jsx
fetch('http://localhost:3000/coffees', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});
```

---

# 🗑️ Deleting Coffee Products

The administrator can delete a coffee product.

The coffee ID is included in the API URL:

```jsx
fetch(`http://localhost:3000/coffees/${id}`, {
  method: "DELETE"
});
```

After deletion, React state is updated:

```jsx
getCoffee(prevCoffees =>
  prevCoffees.filter(coffee => coffee.id !== id)
);
```

This removes the deleted coffee from the UI without requiring the page to reload.

---

# ✏️ Editing Coffee Products

The `Edit` component uses a controlled form to modify an existing coffee.

The selected coffee is copied into state:

```jsx
const [selectedCoffeeData, setSelectedCoffeeData] = useState({
  id: selectedCoffee.id,
  coffee_name: selectedCoffee.coffee_name,
  description: selectedCoffee.description,
  origin: selectedCoffee.origin,
  price: selectedCoffee.price
});
```

The updated data is sent to JSON Server using a PATCH request:

```jsx
fetch(`http://localhost:3000/coffees/${selectedCoffeeData.id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(selectedCoffeeData)
});
```

---

# 🛣️ Routing

React Router is used to create different pages.

```jsx
<Routes>
  <Route path="/" element={<Landingpage />} />
  <Route path="/products" element={<ProductList />} />
  <Route
    path="/administrator/*"
    element={<Administrator />}
  />
</Routes>
```

The application therefore has three main routes:

| Route            | Component       | Purpose                   |
| ---------------- | --------------- | ------------------------- |
| `/`              | `Landingpage`   | Home page                 |
| `/products`      | `ProductList`   | Browse and search coffees |
| `/administrator` | `Administrator` | Manage coffee products    |

---

# 🔌 API Endpoints

The application uses JSON Server running on:

```text
http://localhost:3000
```

### Get coffees

```http
GET /coffees
```

### Add coffee

```http
POST /coffees
```

### Update coffee

```http
PATCH /coffees/:id
```

### Delete coffee

```http
DELETE /coffees/:id
```

---

# ⚙️ Installation

### 1. Clone the project

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd coffee-r-us
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the JSON Server

```bash
npx json-server --watch db.json
```

The API will be available at:

```text
http://localhost:3000
```

### 5. Start the React application

In another terminal:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

---

# 🧪 CRUD Operations

This project demonstrates the four fundamental CRUD operations:

| Operation | HTTP Method | Endpoint       |
| --------- | ----------- | -------------- |
| Create    | POST        | `/coffees`     |
| Read      | GET         | `/coffees`     |
| Update    | PATCH       | `/coffees/:id` |
| Delete    | DELETE      | `/coffees/:id` |

The application therefore demonstrates how a React frontend can communicate with a REST API.

---

# 🎯 Learning Objectives

This project was built to practice:

* React functional components
* Props
* `useState`
* `useEffect`
* `useContext`
* Context API
* Controlled forms
* Form submission
* Event handling
* Conditional rendering
* Array `.map()`
* Array `.filter()`
* String `.includes()`
* Fetch API
* HTTP methods
* CRUD operations
* JSON Server
* React Router
* Tailwind CSS
* Component-based architecture

---

# 🔮 Possible Future Improvements

The application could be extended with:

* User authentication
* Administrator authentication
* Coffee categories
* Sorting by price
* Filtering by origin
* Product images
* Shopping cart functionality
* Product details page
* Pagination
* Form validation
* Loading states
* Error handling
* Confirmation dialogs before deletion
* Responsive mobile navigation
* Backend database such as MySQL or PostgreSQL
* Deployment to a production environment

---

# 👩‍💻 Project Summary

Coffee R Us is a practical React CRUD application designed around a coffee product catalogue. It demonstrates how React components, state management, Context API, routing, controlled forms, and REST API communication can be combined to build a functional web application.

The project provides both a **customer-facing product catalogue** and an **administrator interface** for managing coffee products.

## License
MIT

## Auther
Hope Kathomi