
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
        default:
            return <div>Default Test</div>;
    }
}

var Counter = React.createClass({
    getInitialState: function() {
        return {count: this.props.initialCount};
    },

    handleClick: function() {
        this.setState({count: this.state.count + 1});
    },

    render: function() {
        return <div onClick={this.handleClick}>{this.state.count}</div>;
    }
});

var PageRoot = React.createClass({
    getInitialState: function() {
        return window.initialState;
    },
    render: function() {
        var currentPageCompenent = getPageComponent(state.currentPage);
        return currentPageCompenent;
    }
});

var NavigationRoot = React.createClass({
    getInitialState: function() {
        return window.initialState;
    },
    render: function() {
        return <div><BackButton/>state.currentPage</div>;
    }
});

var BackButton = React.createClass({
    getInitialState: function() {
        return window.initialState;
    },
    handleClick: function() {
        var currentPageIndex;
        state.pageList.every(function(page, index) {
            if (page === state.currentPage) {
                currentPageIndex = index;
                return;
            }
        });
        state.currentPage = state.pageList[currentPageIndex];
    },
    render: function() {
        <div onClick={this.handleClick}>Back</div>;
    }
});

var SplashActivity = React.createClass({
    getInitialState: function() {
        return window.initialState;
    },
    render: function() {
        var currentPageCompenent = getPageComponent(state.currentPage);
        return currentPageCompenent;
    }
});

React.render(<PageRoot/>, document.body);
