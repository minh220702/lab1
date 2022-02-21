import { get, update } from "../../../api/post";
import NavAdmin from "../../../components/NavAdmin";
import axios from 'axios';

const AdminEditNews = {
  async render(id) {
      const { data } = await get(id);
    return /*html*/ `
        <div class="min-h-full">
        ${NavAdmin.render()}
      
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Cập nhật bài viết
                  </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                  <a href="/admin/news" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Quay lại
                    </button>
                  </a>
                </div>
              </div>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <form action="" id="form-edit">
           Tiêu đề   <input type="text"
                    id="title-post"
                    class="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
                    placeholder="Title"
                    value="${data.title}"
              > <br />
            Ảnh  <input type="file"
                    id="img-post"
                    class="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600 mt-2"
                    placeholder="Image"
              > <br />
              <img src="${data.img}" id="img-preview" class="mt-2"/>
             Chi tiết nội dung <input name="" 
                id="desc-post" 
                cols="30" 
                rows="10" 
                class="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
                value="${data.desc}"
              ></input><br />
              <button class="bg-blue-500 p-4 text-white mt-2">Cập nhật</button>
            </form>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        
        `;
  },
  afterRender(id) {
    const formEdit = document.querySelector("#form-edit");
    const imgPost = document.querySelector('#img-post');
    const imgPreview = document.querySelector('#img-preview');
    let imgLink = "";
    
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
    const CLOUDINARY_PRESET = "jkbdphzy";
    
    // preview image when upload
    imgPost.addEventListener('change', async (e) => {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formEdit.addEventListener("submit", async(e) => {
        e.preventDefault();
        const file = imgPost.files[0];
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET);
      
          // call api cloudinary
          
            const { data } = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                "Content-Type": "application/form-data"
              }
            });
            imgLink = data.url;
        }
        update({
            id,
            title: document.querySelector('#title-post').value,
            img: imgLink ? imgLink : imgPreview.src,
            desc:document.querySelector('#desc-post').value,
        });

    });

    
  },
};
export default AdminEditNews;
