import InputWrapper from "./components/InputWrapper.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import MessageContainer from "./components/MessageContainer.js";
import MessageList from "./components/MessageList.js";
import SendMessageForm from "./components/SendMessageForm.js";
import ChatContainer from "./components/ChatContainer.js";
import AppStat from "./components/AppStat.js";
import UserActions from "./components/UserActions.js";

import AuthScreen from "./screens/AuthScreen.js";
import IndexScreen from "./screens/IndexScreen.js";

import "./router.js";
import { getUserByToken } from "./models/user.js";

// let a = {
//     name: 'A',
//     age: 20
// };

// try {
//     a.hello();
//     console.log("Đây là dòng code sau hello và nó chả quan trọng mấy");
// } catch(error) {
//     console.log(error);
// }

// console.log("Dòng này rất quan trọng cần phải được thực thi");

function checkNumber(number) {
    if(number < 0) throw new Error('Số này phải lớn hơn 0');
}


let a = -1;

try {
    checkNumber(a); // ném ra lỗi tại đây
    console.log('đoạn này không được chạy nếu a < 0');
} catch(error) {
    console.log(error);
}

console.log('đoạn này bắt buộc phải chạy không cần quan tâm tới giá trị của a');