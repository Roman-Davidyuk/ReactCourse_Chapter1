**Detailed Description:**

With the **`ToDoListContainer`** and **`Header`** components in place, the component tree is structured as follows:

- **`App`**:
  - Renders the **`Header`** for the app's title and the **`ToDoListContainer`** for managing tasks.
  - Does not manage any state directly, delegating all task-related logic to `ToDoListContainer`.

- **`Header`**:
  - A stateless presentational component that simply displays a heading for the ToDo list, adding structure and clarity to the UI.

- **`ToDoListContainer`**:
  - Manages the core state for the task list (`toDos`) and the search query (`filterText`).
  - Provides methods for adding, filtering, toggling, and deleting tasks.
  - Passes the filtered tasks and relevant functions down to its child components:
    - **`SearchBar`**: Handles the input for the search query, updating the `filterText` in `ToDoListContainer`.
    - **`AddToDoForm`**: Allows users to create new tasks by passing the task title back to `ToDoListContainer`, where it's added to the `toDos` state.
    - **`ToDoList`**: Receives the filtered task list and renders each task via the `ToDoItem` component, along with functions to toggle completion and delete tasks.

- **`SearchBar`**:
  - A controlled input that updates the search query (`filterText`) in `ToDoListContainer` via the `onSearch` prop.

- **`AddToDoForm`**:
  - Manages a local state for the new task's title. Once submitted, it calls `onAddToDo` to add the task to the list managed by `ToDoListContainer`.

- **`ToDoList`**:
  - Renders a list of tasks (`toDos`) and passes each task as a prop to **`ToDoItem`**. It also provides callbacks (`onToggleComplete`, `onDeleteToDo`) to manage individual task actions.

- **`ToDoItem`**:
  - Displays a single task, allowing users to mark it as complete or delete it, using the provided callbacks.

This structure, with `ToDoListContainer`, organizes the task-related logic into a dedicated component, improving modularity, while `Header` keeps the UI clean and structured.
