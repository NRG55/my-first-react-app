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

// ====================== BASIC TYPES ========================

// Below are the validators for the basic data types:

// - PropTypes.any: The prop can be of any data type
// - PropTypes.bool: The prop should be a Boolean
// - PropTypes.number: The prop should be a number
// - PropTypes.string: The prop should be a string
// - PropTypes.func: The prop should be a function
// - PropTypes.array: The prop should be an array
// - PropTypes.object: The prop should be an object
// - PropTypes.symbol: The prop should be a symbol

function Component(){};

Component.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func,
    arrayProp: PropTypes.array,
    objectPerop: PropTypes.object,
    symbolProp: PropTypes.symbol,
}

// ================= RENDERABLE TYPES ==================

// - PropTypes.node: The prop should be anything that React can render, like a number, string, element, array, or fragment containing these types
// - PropTypes.element: The prop should be a React element

Component.propTypes = {
    nodeProp: PropTypes.node,
    elementProp: PropTypes.element
}

// One common use for the PropTypes.element validator is in ensuring that a component has a single child. 
// If the component has no children or multiple children, a warning is displayed on the JavaScript console:

Component.propTypes = {
  children: PropTypes.element.isRequired
}

// ================= INSTANCE TYPES ===================

// In cases where you require a prop to be an instance of a particular JavaScript class, you can use the PropTypes.instanceOf validator:

Component.propTypes = {
  personProp: PropTypes.instanceOf(Person)
}

// ================= MULTIPLE TYPES ======================

// - PropTypes.oneOf: The prop is limited to a specified set of values, treating it like an enum
// - PropTypes.oneOfType: The prop should be one of a specified set of types, behaving like a union of types

Component.propTypes = {

    enumProp: PropTypes.oneOf([true, false, 0, 'Unknown']),

    unionProp: PropTypes.oneOfType([
        PropType.bool,
        PropType.number,
        PropType.string,
        PropType.instanceOf(Person)
    ])
}

// ================ COLLECTION TYPES ======================

// -------- PropTypes.arrayOf --------

// - PropTypes.arrayOf ensures that the prop is an array in which all items match the specified type:

Component.propTypes = {

    peopleArrayProp: PropTypes.arrayOf(
        PropTypes.instanceOf(Person)
    ),

    multipleArrayProp: PropTypes.arrayOf(
        PropTypes.oneOfType([
        PropType.number,
        PropType.string
        ])
    )
}

// ----------- PropTypes.objectOf -----------

// - PropTypes.objectOf ensures that the prop is an object in which all property values match the specified type:

Component.propTypes = {

    booleanObjectProp: PropTypes.objectOf(
        PropTypes.bool
    ),

    multipleObjectProp: PropTypes.objectOf(
        PropTypes.oneOfType([
        PropType.func,
        PropType.number,
        PropType.string,
        PropType.instanceOf(Person)
        ])
    )
}

// ----------- PropTypes.shape ------------

// When a more detailed validation of an object prop is required, you can use PropTypes.shape. 
// It ensures that the prop is an object that contains a set of specified keys with values of the specified types:

Component.propTypes = {
    profileProp: PropTypes.shape({
        id: PropTypes.number,
        fullname: PropTypes.string,
        gender: PropTypes.oneOf(['M', 'F']),
        birthdate: PropTypes.instanceOf(Date),
        isAuthor: PropTypes.bool
    })
}

// ----------- PropTypes.exact ------------

// For strict or exact object matching, PropTypes.exact will give warnings if extra properties exist in a component:

Component.propTypes = {
    subjectScoreProp: PropTypes.exact({
        subject: PropTypes.oneOf(['Maths', 'Arts', 'Science']),
        score: PropTypes.number
    })
}

// ================== CUSTOM VALIDATORS ==================

// ------------------ basic ------------------

// The custom validation function takes three arguments:

// - props: An object containing all the props passed to the component
// - propName: The name of the prop to be validated
// - componentName: The name of the component

// If the validation fails, it should return an Error object. The error should not be thrown. 
// Additionally, you shouldn’t use console.warn inside the custom validation function:

const isEmail = function(props, propName, componentName) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

    if (!regex.test(props[propName])) {
        return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
    }
}

// Example 1:

Component.propTypes = {
    email: isEmail,
    fullname: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

// Example 2:

Component.propTypes = {
    email: PropTypes.oneOfType([
        isEmail,
        PropTypes.shape({
        address: isEmail
        })
    ])
}

// ------------- with PropTypes.arrayOf and PropTypes.objectOf ------------

// The custom validation function takes five arguments instead of three:

// - propValue: The array or object itself
// - key: The key of the current item in the iteration
// - componentName: The name of the component
// - location: The location of the validated data, usually prop
// - propFullName: The fully resolved name of the current item being validated. For an array, this will be array[index]; for an object, it will be object.key

// Below is a modified version of the isEmail custom validation function for use with collection types:

const isEmail2 = function(propValue, key, componentName, location, propFullName) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

    if (!regex.test(propValue[key])) {
        return new Error(`Invalid prop ${propFullName} passed to ${componentName}. Expected a valid email address.`);
    }
}

Component.propTypes = {
    emails: PropTypes.arrayOf(isEmail2)
}

// ----------- UPDATED EMAIL EXAMPLE ---------

const isEmail3 = function(propValue, key, componentName, location, propFullName) {
  // Get the resolved prop name based on the validator usage
  const prop = (location && propFullName) ? propFullName : key;

  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(propValue[key])) {
    return new Error(`Invalid prop ${prop} passed to ${componentName}. Expected a valid email address.`);
  }
}

Component.propTypes = {
    email: PropTypes.oneOfType([
        isEmail,
        PropTypes.shape({
        address: isEmail3
        })
    ]),
    emails: PropTypes.arrayOf(isEmail3)
}

// ------------- PERCENTAGE STAT EXAMPLE ------------

// The PercentageStat component
function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
    return (
        <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
        </div>
    )
}

// Checks if a value is numeric
// Either a finite number or a numeric string
function isNumeric(value) {
    const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
    return Number.isFinite(value) || ((typeof value === "string") && regex.test(value));
}


// Checks if value is non-zero
// Value is first converted to a number
function isNonZero(value) {
    return +value !== 0;
}


// Takes test functions as arguments and returns a custom validation function.
// Each function passed in as argument is expected to take a value argument
// expected to accept a value and return a Boolean if it passes the validation.
// All tests must pass for the custom validator to be marked as passed.
function validatedType(...validators) {
    return function(props, propName, componentName) {

        const value = props[propName];

        const valid = validators.every(validator => {
        if (typeof validator === "function") {
            const result = validator(value);
            return (typeof result === "boolean") && result;
        }

        return false;
        });

        if (!valid) {
        return new Error(`Invalid prop \`${propName}\` passed to \`${componentName}\`. Validation failed.`);
        }

    }
}

// Set the propTypes for the component
PercentageStat.propTypes = {
    label: PropTypes.string.isRequired,
    score: validatedType(isNumeric),
    total: validatedType(isNumeric, isNonZero)
}

// =========== PROPTYPES AND TYPESCRIPT DIFFERENCE =========

// Typescript and PropTypes serve different purposes. Typescript validates types at compile time, whereas PropTypes are checked at runtime.

// Typescript is useful when you are writing code: it will warn you if 
// you pass an argument of the wrong type to your React components, give you autocomplete for function calls, etc.

// PropTypes are useful when you test how the components interact with external data, 
// for example when you load JSON from an API. PropTypes will help you debug 
// (when in React's Development mode) why your component is failing by printing 
// helpful messages like: Warning: Failed prop type: Invalid prop `id` of type `number` supplied to `Table`, expected `string`

// Even though it may seem like Typescript and PropTypes do the same thing, they don't actually overlap at all. But it is possible to automatically generate PropTypes from Typescript so that you don't have to specify types twice, see for example:

// https://github.com/milesj/babel-plugin-typescript-to-proptypes
// https://github.com/grncdr/ts-react-loader#what-it-does
// https://github.com/gcanti/prop-types-ts

