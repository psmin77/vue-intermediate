const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj); 
}

const removeOneItem = (state, index) => {
    const item = state.todoItems[index];
    localStorage.removeItem(item.item);
    state.todoItems.splice(index, 1);
}

const completeOneItem = (state, index) => {
    const item = state.todoItems[index];
    item.completed = !item.completed;

    localStorage.removeItem(item.item);
    localStorage.setItem(item.item, JSON.stringify(item));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, completeOneItem, clearAllItems }
