### Custom Hooks:
   - **useGetAllToDo:**
     - Handles the fetching of tasks from the API and manages the task-related state internally, which previously existed in `ToDoListContainer`.
   - **useLoading:**
     - Manages loading states independently, allowing any component to utilize loading logic without duplication.


### Summary of Changes
- The state management for the task list (`toDos`) has shifted from `ToDoListContainer` to the `useGetAllToDo` custom hook.
- This restructuring enhances modularity and maintains clear separation of concerns, making the application easier to maintain and understand.
