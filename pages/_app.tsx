import '@/styles/globals.css'
import {Provider} from "react-redux";
import store from "../lib/reducers/index";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} className="overflow-hidden"/>      
    </Provider>
  )
}
