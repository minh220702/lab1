import { decreaseQty, increaseQty, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";
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
            <table>
                <thead>
                    <tr>
                        <th class="text-left">Tên sản phẩm</th>
                        <th class="text-left">Giá sản phẩm</th>
                        <th class="text-left">Số lượng</th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>

                    ${cart.length > 0 ? cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <input type="number" value="${item.quantity}" class="border border-gray-400 p-3" />
                                <button data-id="${item.id}" class="btn btn-increase inline-block p-3 bg-green-500 text-white">Tăng</button>
                                <button data-id="${item.id}" class="btn btn-decrease inline-block p-3 bg-orange-500 text-white">Giảm</button>
                            </td>
                            <td>
                            <button data-id="${item.id}" class="btn btn-remove inline-block p-3 bg-red-500 text-white">Xóa</button>
                            </td>
                        </tr>
                    `).join("") : `
                        <tr>
                            <td colspan="4">No record</td>
                        </tr>
                    `}
                    
                </tbody>
            </table>
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
                        toastr.success("Bạn đã xóa thành công")
                    })
                }
            })
        }) 
    }
};
export default CartPage;