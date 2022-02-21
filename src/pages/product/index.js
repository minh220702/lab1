import { getAll } from "../../api/product";
const ProductsPage = {
    async render() {
        const { data } = await getAll()
        return /* html */`
            <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Danh sách sản phẩm</h2>
            <div>
                <div class="grid grid-cols-3 gap-8">
                        ${data.map((product) => `
                                    <div class="border p-4">
                                        <div class="news-img">
                                            <a href="/#/products/${product.id}">
                                                <img src="${product.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/#/products/${product.id}" class="font-semibold text-orange-500">${product.name}</a></h3>
                                        <p class="text-sm text-gray-600">${product.desc}</p>
                                        <p class="text-sm text-gray-600">${product.price}</p>
                                    </div>
                            `).join("")}
                </div>
            </div>`;
    },
};
export default ProductsPage;



