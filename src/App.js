import React from 'react';
import './App.scss';
import Sidebar from './dashboard/Sidebar';
import Main from './dashboard/Main';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <React.Fragment>
            <div className="wrapper container-fluid">
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10" id="header-section">
                        <div className="header" id="header">
                            <Navbar />
                        </div>

                        <div className="main mt-3 pl-4 pr-4">
                            <div className="title-section">
                                <p className="title">Products</p>
                            </div>
                            <Main />
                        </div>
                    </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default App;
