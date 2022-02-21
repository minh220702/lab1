import Header from "../components/header";
import News from "../components/news";

const HomePage = {
    async render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <div id="header">
                ${Header.render()}
            </div>
            
            <main>
                <div class="banner newsDemo">
                    <img src="https://picsum.photos/1500/400" />
                </div>
                <div class="news">
                    ${await News.render()}
                </div>
            </main>
            <footer class="bg-blue-900 text-center py-4">
                <p class="mb-0 text-white">Copy by Datlt</p>
            </footer>
        </div>
           
        `;
    },
    afterRender(){
        Header.afterRender();
    }
};
export default HomePage;
