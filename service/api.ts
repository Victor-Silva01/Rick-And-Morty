import axios from 'axios';

//const baseURL = 'https://rickandmortyapi.com/';

const api = axios.create({
  baseURL: "https://rickandmortyapi.com"
});


export {api};

