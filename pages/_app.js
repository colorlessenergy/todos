import '../styles/globals.css';

import { TodosContextProvider } from '../shared/Context/TodoContext';

function MyApp({ Component, pageProps }) {
    return (
        <TodosContextProvider>
            <Component {...pageProps} />
        </TodosContextProvider>
    );
}

export default MyApp;
