import { signup } from "../api/user";

const Signup = {
    render(){
        return /*html*/`
            <form id="formSignup">
                <input type="text" placeholder="username" id="username" />
                <input type="email" placeholder="email" id="email" />
                <input type="password" placeholder="password" id="password" />
                <button>Đăng ký</button>
            </form>
        `
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector('#username').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);

            } catch (error) {
                console.log(error.response.data);
            }
        });
    }
}
export default Signup;