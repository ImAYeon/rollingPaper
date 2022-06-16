import React from 'react';
import { useDispatch } from 'react-redux';
import { load7 } from '../../app/users';
const Login = ({ setpageSet }) => {
    const dispatch = useDispatch();
    const REST_API_KEY = '02416e0d3d0c35f47f06b0dcd3b560f0';
    const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const LoginClick = () => {
        let form = document.frm;
        if (form.userId.value === '') {
            alert('ID를 입력해 주세요');
        }
        else if (form.password.value === '') {
            alert('Password를 입력해 주세요');
        }
        else {
            dispatch(load7({
                userId: form.userId.value,
                password: form.password.value,
            }));
        }
    };
    return (React.createElement("div", { className: "container w-25" },
        React.createElement("form", { className: "align-middle", method: "get", name: "frm", action: "/main" },
            React.createElement("div", { className: "row form-floating mb-3" },
                React.createElement("input", { className: "form-control", type: "text", name: "userId", placeholder: "id" }),
                React.createElement("label", { htmlFor: "id" }, "ID ")),
            React.createElement("div", { className: "row form-floating mb-3" },
                React.createElement("input", { className: "form-control", type: "password", name: "password", placeholder: "pwd" }),
                React.createElement("label", { htmlFor: "password" }, "Password ")),
            React.createElement("div", { className: "row" },
                React.createElement("button", { className: "btn btn-outline-primary", type: "button", onClick: LoginClick }, "\uB85C\uADF8\uC778"),
                React.createElement("div", { className: "form-text" },
                    "\uC544\uC774\uB514\uAC00 \uC5C6\uC73C\uC2E0\uAC00\uC694?",
                    React.createElement("button", { className: "btn btn-sm btn-link", type: "button", onClick: () => setpageSet('join') }, "\uD68C\uC6D0\uAC00\uC785")),
                React.createElement("button", { className: "btn btn-outline-primary", type: "button", onClick: () => {
                        window.location.href = KAKAO_AUTH_URL;
                    } }, "\uCE74\uCE74\uC624\uC5F0\uB3D9")))));
    //         <div className="row form-floating mb-3">
    //           <input className="form-control" type="password" name="password" placeholder="pwd" />
    //           <label htmlFor="password">Password </label>
    //         </div>
    //         <div className="row">
    //           <Link to="/profile" className="btn btn-outline-primary" type="button">
    //             로그인
    //           </Link>
    //           <div className="form-text">
    //             아이디가 없으신가요?
    //             <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
    //               회원가입
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   );
};
export default Login;
