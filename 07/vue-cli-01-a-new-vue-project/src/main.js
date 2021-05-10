import { createApp } from 'vue';
import App from './App.vue';
import FriendContent from "@/components/FriendContent";

const app = createApp(App);

app.component('friend-contact', FriendContent);

app.mount('#app');
