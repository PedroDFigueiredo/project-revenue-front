import axios from 'axios';

export const getAllTransactions = () => axios
    .get('api/transaction')
    .then(response => response.data);
