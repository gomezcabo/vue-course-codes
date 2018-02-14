import Home from './components/Home.vue'
import Header from './components/Header.vue'

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
}

const UserDetail = () => System.import('./components/user/UserDetail.vue');
const User = () => System.import('./components/user/User.vue');
const UserStart = () => System.import('./components/user/UserStart.vue');

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header,
    }},
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart, name: 'userStart' },
        { path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
    { path: '*', redirect: { name: 'home' } }
];
