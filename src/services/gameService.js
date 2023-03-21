

import * as request from './requester'
const baseUrl = 'http://127.0.0.1:3030/jsonstore/games';

export const getAll = async () => {

    const result = await request.get(baseUrl);
    const games = Object.values(result)
    

    return games;
};