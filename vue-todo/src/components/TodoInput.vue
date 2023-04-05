<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus"></i>
        </span>

        <ModalComponent v-if="showModal" @close="showModal = false">
            <h3 slot="header">Notice</h3>
            <div slot="body">{{ message }}</div>
        </ModalComponent>
    </div>  
</template>

<script>
import ModalComponent from './common/ModalComponent.vue';

export default {
    components: {ModalComponent},
    data() {
        return {
            newTodoItem: '',
            showModal: false,
            message: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();
            } else {
                this.message = "데이터를 입력하세요."
                this.showModal = true;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>