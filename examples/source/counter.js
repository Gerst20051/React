var mountPoint = document.body;

var Counter = React.createClass({
    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {count: this.props.initialCount};
    },

    handleClick: function() {
        this.setState({count: this.state.count + 1});
    },

    render: function() {
        return <div onClick={this.handleClick}>{this.state.count}</div>;
    }
});

React.render(<Counter initialCount={7}/>, mountPoint);
