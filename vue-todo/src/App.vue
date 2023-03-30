<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" 
              @removeTodoItem="removeOneItem"
              @completeTodoItem="completeOneItem"></TodoList>
    <TodoFooter @clearAll="clearAllItems"></TodoFooter>
  </div> 
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
  data() {
    return {
      todoItems: []
        }
    },
  created() {
    if (localStorage.length > 0) {
      for (let i=0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(item);
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj); 
    },
    removeOneItem(index) {
      const key = localStorage.key(index);
      localStorage.removeItem(key);
      this.todoItems.splice(index, 1);
    },
    completeOneItem(index) {
      const item = this.todoItems[index];
      item.completed = !item.completed;

      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>