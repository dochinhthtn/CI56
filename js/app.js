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

getUserByToken('this is my token');
