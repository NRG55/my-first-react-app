import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>;
};

RenderName.propTypes = {
    // to make sure a prop is being passed in, use isRequired like so: name: PropTypes.string.isRequired
    name: PropTypes.string,
};

RenderName.defaultProps = {
    name: 'Zach',
};

// export default RenderName;

// ================ CLASS - Default Prop Values =================

class Greeting extends React.Component {
    render() {
        return (
        <h1>Hello, {this.props.name}</h1>
        );
    };
};

// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
};

// Renders "Hello, Stranger":
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);

// ---------------------------------------

// Since ES2022 you can also declare defaultProps as static property
class Greeting extends React.Component {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
        <div>Hello, {this.props.name}</div>
        )
    };
};

// ============ FUNCTION COMPONENT - Default Prop Values ============

// For example: export default function HelloWorldComponent({ name }) {}
// To add PropTypes, you may want to declare the component in a separate function before exporting 
function HelloWorldComponent({ name }) {
    return (
        <div>Hello, {name}</div>
    )
}

HelloWorldComponent.propTypes = {
    name: PropTypes.string
}

export default HelloWorldComponent;