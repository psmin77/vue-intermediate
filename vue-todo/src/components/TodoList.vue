<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todo, index) in this.$store.state.todoItems" :key="index" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todo.completed}" 
                    @click="toggleComplete(index)"></i>
                <span v-bind:class="{textCompleted: todo.completed}">{{ todo.item }}</span>                    
                <span class="removeBtn" v-on:click="removeTodo(index)">
                        <i class="fa-regular fa-trash-can"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(index) {
            this.$emit('removeTodoItem', index);
        },
        toggleComplete(index) {
            this.$emit('completeTodoItem', index);
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
    cursor: pointer;
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>