import { getAll, remove } from "../../../api/cate"

import NavAdmin from "../../../components/NavAdmin";
import { reRender } from "../../../utils/reRender";
const showCate = {
 async render() {
  const { data } = await getAll();
        return /* html */ `
        ${await NavAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
              <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Quản lý danh mục
                </h2>
              </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news/addcate" class="sm:ml-3">
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Thêm mới
                  </button>
                </a>
              </div>
            </div>
    
        </div>
      </header>
        <div class="w-[1600px] bg-pink-100">
        <div class="news w-[1170px] mx-auto">
          <table class="border-collapse w-[100%]">
            <tr class="bg-[#04AA6D]">
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">ID</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Tên danh mục</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Sửa</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Xoá</th>
            </tr>
           
              ${data.map((post) => `
              <tr class="hover:bg-pink-600">
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${post.id}</td>
              <td class="border-[1px] border-solid border-[#ddd] p-[8px] w-[100px]">${post.name}</td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center font-bold"><a href="/admin/news/showcate/${post.id}/editcate">Sửa</a></td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center font-bold"><button data-id="${post.id}" class="btn_delete font-bold" type="submit">Xoá</button></td>
              </tr>
              `).join("")}
           
        
          </table>
        </div>
      </div>
        `;
    },
    afterRender() {
     // console.log(document.querySelector(".btn_delete"));
      const btns = document.querySelectorAll(".btn_delete");
     
      btns.forEach(ButtonElement => {
       
        const id = ButtonElement.dataset.id;
        ButtonElement.addEventListener('click',function(){
            const confirm = window.confirm("Bạn có muốn xoá hay không?");
            if(confirm){
              remove(id).then(() => console.log('Bạn đã xoá thành công'))
              .then(() => reRender(News,"#app"));
            }
          })
      });
    }
};
export default showCate;