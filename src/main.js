import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminAddNews from "./pages/admin/news/add";
import AdminEditNews from "./pages/admin/news/edit";
import DetailNewsPage from "./pages/detailNews";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import ProductsPage from "./pages/product";
import DetailProductPage from "./pages/product/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import AddCate from "./pages/admin/news/addcate";
import showCate from "./pages/admin/news/showcate";
import EditC from "./pages/admin/news/editcate";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId === 1){
            done();  
        } else {
            document.location.href="/";
        }
      } else{
          document.location.href="/";
      }
      
    }
  })
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print("About Page");
    },
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/news/addcate": () => print(AddCate),
    "/admin/news/showcate": () => print(showCate),
    "/admin/news/showcate/:id/editcate": ({data}) => print(EditC, data.id),
    "/contact": () => print(Contact),
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage)
});

router.notFound(() => print("Not Found Page"));

router.resolve();
