import axios from 'axios';
export const getInitialUsers = () =>
  axios('https://jsonplaceholder.typicode.com/posts/99');
