<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todoItems" :key="index" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todo.completed}" 
                    @click="toggleComplete(index)"></i>
                <span v-bind:class="{textCompleted: todo.completed}">{{ todo.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(index)">
                    <i class="fa-regular fa-trash-can"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
    return {
      todoItems: []
        }
    },
    created: function() {
    if (localStorage.length > 0) {
      for (var i=0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(item);
        }
      }
    }},
    methods: {
        removeTodo(index) {
            const key = localStorage.key(index);
            localStorage.removeItem(key);
            this.todoItems.splice(index, 1);
        },
        toggleComplete(index) {
            var item = this.todoItems[index];
            item.completed = !item.completed;

            localStorage.removeItem(item.item);
            localStorage.setItem(item.item, JSON.stringify(item));
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>