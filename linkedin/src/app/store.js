import { configureStore } from '@reduxjs/toolkit'
import {loginReducer} from "../features/auth/Login"
export const store = configureStore({
reducer: {
  // login: loginReducer
}
})