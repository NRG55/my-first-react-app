export default function AnimalList() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animalList={animals} />
        </div>
    );
}

function ListItem(props) {
    return <li>{props.animal}</li>
}
  
function List(props) {

    return (
        <ul>
        {props.animalList.map((animal) => {
            return <ListItem key={animal} animal={animal} />;
        })}
        </ul>
    );
}

// -------CONDITIONALLY RENDERING--------- 


// using the ternary operator
function ListTernary(props) {
    return (
      <ul>
        {props.animalList.map((animal) => {
          return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        })}
      </ul>
    );
}

// using the && operator
function ListAND(props) {
    return (
      <ul>
        {props.animalList.map((animal) => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>; //If the result of the startsWith function is true, then it returns the second operand, which is the <li> element, and renders it. Otherwise, if the condition is false it just gets ignored.
        })}
      </ul>
    );
}

// Don’t put numbers on the left side of &&.
// To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.
// For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!
// To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.

// using if, if/else and switch
function ListIf(props) {
    if (!props.animalList) {
      return <div>Loading...</div>;
    }
  
    if (props.animalList.length === 0) {
      return <div>There are no animals in the list!</div>;
    }
  
    return (
      <ul>
        {props.animalList.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
}

// using ternary and &&
function ListTernaryExample(props) {
    return (
      <>
        {!props.animalList ? (
          <div>Loading...</div>
        ) : props.animalList.length > 0 ? (
          <ul>
            {props.animalList.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        ) : (
          <div>There are no animals in the list!</div>
        )}
      </>
    );
  }
  
  // or
  function ListANDExample(props) {
    return (
      <>
        {!props.animalList && <div>Loading...</div>}
        {props.animalList && props.animalList.length > 0 && (
          <ul>
            {props.animalList.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        )}
        {props.animalList && props.animalList.length === 0 && <div>There are no animals in the list!</div>}
      </>
    );
  } 
