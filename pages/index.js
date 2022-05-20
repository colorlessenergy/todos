import Head from 'next/head';

import CreateTodo from '../shared/Components/CreateTodo';
import Todos from '../shared/Components/Todos';

export default function Home() {
    return (
        <div>
            <Head>
                <title>todos</title>
                <meta name="description" content="todos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <CreateTodo />
                <div className="todos-container">
                    <Todos />
                </div>
            </div>
        </div>
    );
}
