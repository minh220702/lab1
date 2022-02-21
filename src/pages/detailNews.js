// import data from "../data";

import axios from "axios";
import { get } from "../api/post";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <div>${data.desc}</div>
            <button>Add to cart</button>
        `
    },
};
export default DetailNewsPage;
