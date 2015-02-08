
var initialState = {
    currentPage: 'splash',
    pageList: [
        'splash',
        'login',
        'signup',
        'verify',
        'dashboard'
    ]
};
var state = initialState;

function getPageComponent(page) {
    switch (page) {
        case 'splash':
            return <SplashActivity/>;
        case 'login':
            return <LoginActivity/>;
        case 'signup':
            return <SignupActivity/>;
        case 'verify':
            return <VerifyActivity/>;
        case 'dashboard':
            return <DashboardActivity/>;
        default:
            return <div>Default Activity</div>;
    }
}

var PageRoot = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        var currentPageCompenent = getPageComponent(state.currentPage);
        return currentPageCompenent;
    }
});

var NavigationRoot = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        return  <nav className="navbar navbar-inverse navbar-fixed-top noselect">
                    <div className="container">
                        <BackButton/>
                        <a className="navbar-brand text-center col-sm-4" href="#"><img alt="Brand" src="https://lh4.ggpht.com/9-owBvxewndIk3Xu6I4QLCMmiJE9yi7MLkaLRWkMhn60tXU-md4tHAkF4OaIFU-prus=w20"/>{state.currentPage.toUpperCase()}</a>
                        <NextButton/>
                    </div>
                </nav>;
    }
});

var BackButton = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    handleClick: function() {
        var currentPageIndex;
        for (var i = 0; i < state.pageList.length; i++) {
            if (state.pageList[i] === state.currentPage) {
                currentPageIndex = i;
                break;
            }
        }
        if (0 < currentPageIndex) {
            state.currentPage = state.pageList[currentPageIndex - 1];
        }
        // this.setState(state);
        renderPage();
    },
    render: function() {
        var className = 'btn btn-default navbar-btn';
        if (state.currentPage === state.pageList[0]) {
            className += ' disabled';
        }
        return  <div className="col-sm-4">
                    <button type="button" className={className} onClick={this.handleClick}>Back</button>
                </div>;
    }
});

var NextButton = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    handleClick: function() {
        var currentPageIndex;
        for (var i = 0; i < state.pageList.length; i++) {
            if (state.pageList[i] === state.currentPage) {
                currentPageIndex = i;
                break;
            }
        }
        if (currentPageIndex < state.pageList.length - 1) {
            state.currentPage = state.pageList[currentPageIndex + 1];
        }
        // this.setState(state);
        renderPage();
    },
    render: function() {
        var className = 'btn btn-default navbar-btn pull-right';
        if (state.currentPage === state.pageList[state.pageList.length - 1]) {
            className += ' disabled';
        }
        return  <div className="col-sm-4">
                    <button type="button" className={className} onClick={this.handleClick}>Next</button>
                </div>;
    }
});

var SplashActivity = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    handleSignupClick: function() {
        state.currentPage = 'signup';
        // this.setState(state);
        renderPage();
    },
    handleLoginClick: function() {
        state.currentPage = 'login';
        // this.setState(state);
        renderPage();
    },
    render: function() {
        return  <div>
                    <div id="splashActivity" className="activityContent noselect">
                        <div>
                            <img id="splashActivityImage" src="https://s3.amazonaws.com/passportmedia/whitelabel/default/images/pp-logo-light.png" />
                        </div>
                        <button type="button" id="signupBtn" onClick={this.handleSignupClick}>Signup</button>
                        <div>Already have an account?</div>
                        <button type="button" id="loginBtn" onClick={this.handleLoginClick}>Login</button>
                    </div>
                </div>;
    }
});

var LoginActivity = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        return  <div>
                    <NavigationRoot/>
                    <div id="loginActivity" className="activityContent">
                        <header>
                            {state.currentPage.toUpperCase()}
                        </header>
                    </div>
                </div>;
    }
});

var SignupActivity = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        return  <div>
                    <NavigationRoot/>
                    <div id="signupActivity" className="activityContent">
                        <header>
                            {state.currentPage.toUpperCase()}
                        </header>
                    </div>
                </div>;
    }
});

var VerifyActivity = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        return  <div>
                    <NavigationRoot/>
                    <div id="verifyActivity" className="activityContent">
                        <header>
                            {state.currentPage.toUpperCase()}
                        </header>
                    </div>
                </div>;
    }
});

var DashboardActivity = React.createClass({
    getInitialState: function() {
        return initialState;
    },
    render: function() {
        return  <div>
                    <NavigationRoot/>
                    <div id="dashboardActivity" className="activityContent">
                        <header>
                            {state.currentPage.toUpperCase()}
                        </header>
                    </div>
                </div>;
    }
});

function renderPage() {
    React.render(<PageRoot/>, document.body);
}

renderPage();
