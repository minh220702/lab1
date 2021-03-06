import { reRender } from "../utils/rerender";

const Header = {
    render() {
        return /* html */`
        <header>
        <div class="bg-red-500 items-center px-5 xl:px-12 py-6 flex w-full">
            <div>
            <img src="https://dothethao.net.vn/wp-content/uploads/2020/06/logo-manchester-united.png" alt="" class="w-[100px]">
            </div>
                <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-2 text-white">
                    <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white text-xl">Home </a></li>
                    <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white text-xl">About</a></li>
                    <li><a href="/product" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white text-xl">Product</a></li>
                    <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white text-xl">Contact</a></li>
                    <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white text-xl">Dashboard</a></li>
            <span id="account" class="text-white"></span>
            ${localStorage.getItem('user') ? '<button id="logout" class="text-black">Logout</button>' : ""}
            </ul>
            <div class="hidden xl:flex items-center space-x-5 items-center">
            <a class="hover:text-gray-200" href="/signup">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </a>
            <a class="flex items-center hover:text-gray-200" href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  </span>
                </span>
            </a>
            <!-- Sign In / Register      -->
            <a class="flex items-center hover:text-gray-200" href="/signin">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
            
          </div>
        </div>
  
      </header>
        
        `;
    },
    afterRender(){
        const account = document.querySelector('#account');
        const btnLogout = document.querySelector('#logout');
       

        btnLogout.addEventListener('click', function(){
           localStorage.removeItem('user');
           alert('????ng xu???t th??nh c??ng');
           reRender(Header, "#header");
        })
    }
};
export default Header;