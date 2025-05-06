export default function PackingList() {
    return  (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <ItemTextWrappedIntoHTMLTag 
            isPacked={true} 
            name="Space suit" 
          />
          <ItemTextWrappedIntoHTMLTag 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <ItemTextWrappedIntoHTMLTag 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    )
}

// using if
function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>;
    };

    return <li className="item">{name}</li>;
}

// using ternary
function ItemTernary({ name, isPacked }) {
    return (
        <li className="item">
          {isPacked ? name + ' ✅' : name}
        </li>
    );
}

// wrapping the completed item’s text into another HTML tag, like <del> to strike it out
function ItemTextWrappedIntoHTMLTag({ name, isPacked }) {
    return (
      <li className="item">
        {isPacked ? (
          <del>
            {name + ' ✅'}
          </del>
        ) : (
          name
        )}
      </li>
    );
}

// using && operator
function ItemAND({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✅'}
      </li>
    );
}

// Don’t put numbers on the left side of &&.
// To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.
// For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!
// To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.

// -------------Conditionally assigning JSX to a variable-----------------
function ItemAssignJSXToVariable({ name, isPacked }) {
    let itemContent = name;

    if (isPacked) {
      itemContent = name + " ✅";
    }

    return (
      <li className="item">
        {itemContent}
      </li>
    );
}

// adding <del>
function ItemAssignJSXToVariableExampleTwo({ name, isPacked }) {
    let itemContent = name;

    if (isPacked) {
      itemContent = (
        <del>
          {name + " ✅"}
        </del>
      );
    };

    return (
      <li className="item">
        {itemContent}
      </li>
    );
}

// ------------Challenges----------

// (1) using the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true
function ItemTernaryChallenge({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✅' : '❌'}
      </li>
    );
}
 
// (2) using the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance
export function PackingListImportanceChallenge() {
    return (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <ItemImportance 
            importance={9} 
            name="Space suit" 
            />
            <ItemImportance 
            importance={0} 
            name="Helmet with a golden leaf" 
            />
            <ItemImportance 
            importance={6} 
            name="Photo of Tam" 
            />
        </ul>
        </section>
    );
}

function ItemImportanceSolution({ name, importance }) {
    return (
      <li className="item">
        {name}
        {importance > 0 && ' '} 
        {importance > 0 &&
         <i>(Importance: {importance})</i>
        }
      </li>
    );
}

// {importance > 0 && ' '} condition is used to insert a space between the name and the importance
// Alternatively, could use a Fragment with a leading space: importance > 0 && <> <i>...</i></> or 
// add a space immediately inside the <i>:  importance > 0 && <i> ...</i>

// (3) refactor a series of ? : to if and variables 
function Drink({ name }) {   
    let plant;
    let caffeine;
    let age;

    if (name === 'tea') {
        plant = "leaf";
        caffeine = '15–70 mg/cup';
        age = '4,000+ years';
    } else if (name === 'coffee') {       
        plant = 'bean';
        caffeine = '80–185 mg/cup';
        age = '1,000+ years';
    }

    return (
      <section> 
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{plant}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
}
  
export function DrinkList() {
    return (
        <div>
        <Drink name="tea" />
        <Drink name="coffee" />
        </div>
    );
}

// another solution would be to remove the condition altogether by moving the information into objects
const drinks = {
    tea: {
      plant: 'leaf',
      caffeine: '15–70 mg/cup',
      age: '4,000+ years'
    },
    coffee: {
      plant: 'bean',
      caffeine: '80–185 mg/cup',
      age: '1,000+ years'
    }
};

function DrinkExampleTwo({ name }) {
    const info = drinks[name];

    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.plant}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    );
}

export function DrinkListExampleTwo() {
    return (
        <div>
            <DrinkExampleTwo name="tea" />
            <DrinkExampleTwo name="coffee" />
        </div>
    );
}






