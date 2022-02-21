
import axios from 'axios';
import { getAll } from "../api/post";
const News = {
    async render() {
        const { data } = await getAll()
        return /* html */`
        <div class="grid grid-cols-3 gap-8 pt-6  pb-6">
        ${data.map((post) => `
<div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
<a href="/news/${post.id}">  
<img src="${post.img}" alt="">
</a>
<div class="p-5">
  <h1 class="text-2xl font-bold">${post.title}</h1>
 
  <p class="mt-1 text-gray-500 font-">${post.desc}</pa>
</div>
</div>
`).join("")}
</div>`;


        
    // return fetch("https://5e79b4b817314d00161333da.mockapi.io/posts")
    // .then((response) => response.json())
    // .then((data) => /* html */`
    //         <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học lập</h2>
    //         <div class=${style.newsDemo}>
    //             <div class="grid grid-cols-3 gap-8">
    //                     ${data.map((post) => `
    //                                 <div class="${style["news-item"]} border p-4">
    //                                     <div class="news-img">
    //                                         <a href="/news/${post.id}">
    //                                             <img src="${post.img}" />
    //                                         </a>
    //                                     </div>
    //                                     <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
    //                                     <p class="text-sm text-gray-600">${post.desc}</p>
    //                                 </div>
    //                         `).join("")}
    //             </div>
    //         </div>`);
    },
};
export default News;



