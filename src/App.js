import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import Online from './components/Online/Online';
import DarkModeToggler from './components/DarkModeToggler/DarkModeToggler';

function App() {
    // return <Online />;
    return (
        <Router>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        >
                            Custom Hooks
                        </Link>
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none">
                            <li className="nav-item">
                                <NavLink
                                    to="/use-online"
                                    activeClassName="border-b-2"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    use online
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/use-dark-mode"
                                    activeClassName="border-b-2"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    use dark mode
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/use-local-storage"
                                    activeClassName="border-b-2"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    use local storage
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="h-screen pt-3 pl-3">
                <Switch>
                    <Route path="/use-online">
                        <Online />
                    </Route>
                    <Route path="/use-dark-mode">
                        <DarkModeToggler />
                    </Route>
                    <Route path="/" exact={true}>
                        <h1 className="text-5xl">Welcome custom react API guide</h1>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
