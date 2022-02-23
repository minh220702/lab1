import Header from "../components/header";
import { decreaseQty, increaseQty, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/reRender";
import { $ } from "../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return `
        <header>
        ${Header.render()}
        </header>
        <main class="w-[1600px] mt-[30px]">
        <div class="w-[1170px] mx-auto">
            <table class="w-[70%] ">
              <tr class="bg-[#04AA6D]">
                <th class="border-[1px] border-solid border-[#ddd] p-[8px] ">Ảnh</th>
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]"> Tên sản phẩm</th>
           
                
              
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Xoá</th>
              </tr>
                ${cart.length > 0 ? cart.map(item => `
                <tr class="hover:bg-yellow-600">
                <td class="w-[120px]">  <img alt="ecommerce" class="lg: object-cover object-center rounded border  w-[300px]" src="${item.img}"></td>
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${item.title}</td>
              
              

                <td class="border-[1px] border-solid border-[#ddd] w-[20px] p-[8px] text-center  bg-red-300"><button data-id="${item.id}" class="btn btn-remove font-bold">Xoá</button></td>
                </tr>
                <tr >
               
                  </tr>
                `).join("") : `
                 <tr> 
                 <td colspan="4"> No record </td>
                 </tr>
                
                `}
                <form>
              
            
              
              </form>
              
            </table>
            <button class=" bg-red-500 p-[15px] w-[120px] rounded-[5px]  mt-[30px] text-white"><a href="/">Mua hàng</a></button></td>
        </div>
    </main>
        `
    },
    afterRender(){
        $(".btn").forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                console.log(id);
                if(btn.classList.contains('btn-increase')){
                    increaseQty(id, () => reRender(CartPage, "#app"));
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQty(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                      
                    })
                }
            })
        }) 
    }
};
export default CartPage;