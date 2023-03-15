import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import announcementReducer from "./reducers/announcement/announcement.reducer.js";
import categoryReducer from "./reducers/category/category.reducer.js";
import cityReducer from "./reducers/city/city.reducer.js";
import userReducer from "./reducers/user/user.reducer.js";
import contactReducer from "./reducers/contact/contact.reducer.js";
import tokenReducer from "./reducers/token/token.reducer.js";
import subscriberReducer from "./reducers/subscriber/subscriber.reducer.js";
// Reducers
import {
  signupReducer,
  otpReducer,
  loginReducer,
} from "./reducers/auth/auth.reducer.js";

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    signup: signupReducer,
    otp: otpReducer,
    login: loginReducer,
    announcement: announcementReducer,
    category: categoryReducer,
    city: cityReducer,
    user: userReducer,
    contact: contactReducer,
    token: tokenReducer,
    subscriber: subscriberReducer,
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
