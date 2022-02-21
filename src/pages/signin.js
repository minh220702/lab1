import { signin } from "../api/user";

const Signin = {
    render(){
        return /*html*/`
            <form id="formSignin">
                <input type="email" placeholder="email" id="email" />
                <input type="password" placeholder="password" id="password" />
                <button>Đăng nhập</button>
            </form>
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                localStorage.setItem('user', JSON.stringify(response.data.user));
                if(response.data.user.id === 1){
                    document.location.href="/admin/news";
                } else {
                    document.location.href="/";
                }

            } catch (error) {
                console.log(error.response.data);
            }
        });
    }
}
export default Signin;