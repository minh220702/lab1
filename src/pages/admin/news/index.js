import { getAll, remove } from "../../../api/post";
import NavAdmin from "../../../components/NavAdmin";
import { reRender } from "../../../utils/rerender";

const AdminNews = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
      
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý bài viết
                  </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                  <a href="/admin/news/add" class="sm:ml-3">
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
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ảnh
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tiêu đề
                                </th>
                                
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((post, index, category) => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${index + 1}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <img src="${post.img}" width="50"/>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.title}
                                    </td>
                                
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="/#/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        <button data-id="${post.id}" class="btn btn-delete bg-indigo-600 hover:bg-indigo-900 px-4 py-3 text-white rounded-full">Delete</button>
                                    </td>
                                </tr>
                            `).join("")}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        
        `;
    },
    afterRender() {
        // Lấy toàn bộ button có class .btn
        const btns = document.querySelectorAll(".btn");
        btns.forEach((buttonElement) => {
            // lấy id button thông qua thuộc tính data-id
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () => {
                // Xoa phan tu trong mang dua tren ID
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if(confirm){
                  // call api xóa
                  remove(id)
                    .then(() => console.log('Bạn đã xóa thành công'))
                    .then(() => reRender(AdminNews, "#app"));
                }
            });
        });
    },
};
export default AdminNews;
