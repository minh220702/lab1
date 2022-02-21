import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";


const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.name}</h1>
            <img src="${data.img}" />
            <div>${data.desc}</div>
            <input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" />
            <button id="btnAddToCart" class="inline-block px-4 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-700">Add to cart</button>
        `
    },
    afterRender(id){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            addToCart({...data, quantity: +$("#inputQty").value}, () => {
                toastr.success("Thêm thành công!");
            });
        })
    }
};
export default DetailProductPage;
