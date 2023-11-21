import axios from "axios";



const httpClientPlugin = {

    get: async (url) => {

        const { data } = await axios.get(url);
        return data;
        // const resp = await fetch(url);
        // return await resp.json();
    },

    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url, body) => { },



};

const http = httpClientPlugin;

export {
    http
};





