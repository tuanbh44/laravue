import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
        {
            path: '/',
            component: UserList,
            name: 'users.index',
        },
        {
            path: '/users/create',
            component: CreateUser,
            name: 'users.create',
        },
        {
            path: '/users/edit/:id',
            component: EditUser,
            name: 'users.edit',
        },
    ];

export default routes;
