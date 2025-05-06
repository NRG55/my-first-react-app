const people = [    
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
  
export default function List() {
const listItems = people.map(person =>
    <li>{person}</li>
);

return <ul>{listItems}</ul>;
}

//--------------Filtering arrays-------------

const people2 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
    }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    }]; 
  
export function List2() {
    const chemists = people2.filter(person =>        
            person.profession === 'chemist'
        );

    const listItems = chemists.map(person =>
        <li>
        <img
            src={null}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
        </li>
    );

    return <ul>{listItems}</ul>;
}

//------------Keeping list items in order with key----------

export const people3 = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
    }, {
    id: 1, 
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
    }, {
    id: 2, 
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
    }, {
    id: 3, 
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
    }, {
    id: 4, 
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
    }];

export function List3() {
    const listItems = people3.map(person =>
        <li key={person.id}>
        <img
            src={null}
            alt={person.name}
        />
        <p>
            <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}
  
//------------------CHALLENGES-----------------

// (1) Splitting a list in two
let chemists = [];
let everyoneElse = [];

people3.forEach(person => {
  if (person.profession === 'chemist') {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={null}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  );
}

export function List4() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection
        title="Chemists"
        people={chemists}
      />
      <ListSection
        title="Everyone Else"
        people={everyoneElse}
      />
    </article>
  );
}
  
// (2) Nested lists in one component 
const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

export function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// (3) Extracting a list item component 
export const recipes2 = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export function RecipeList2() {
  return (
    <div>
      <h1>Recipes</h1>      
      {recipes2.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

// <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying “pass all properties of 
// the recipe object as props to the Recipe component”. Could also write each prop explicitly: 
// <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />

// Note that the key is specified on the <Recipe> itself rather than on the root <div> returned from 
// Recipe. This is because this key is needed directly within the context of the surrounding array. 
// Previously, I had an array of <div>s so each of them needed a key, but now I have an array of <Recipe>s. 
// When I extract a component, I need to leave the key outside the JSX I copy and paste.


// (4) List with a separator
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export function PoemSimple() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          <p key={index}>
            {line}
          </p>
        )}
      </article>
    );
  } 
  
  // Option 1: manual loop, inserting <hr /> and <p>...</p> into the output array
  export function Poem() {
    let output = [];
  
    // Fill the output array
    poem.lines.forEach((line, i) => {
      output.push(
        <hr key={i + '-separator'} />
      );

      output.push(
        <p key={i + '-text'}>
          {line}
        </p>
      );
    });

    // Remove the first <hr />
    output.shift();
  
    return (
      <article>
        {output}
      </article>
    );
  }

  // Option 2: render a collection of Fragments which contain <hr /> and <p>...</p>. However, the <>...</> shorthand 
  // syntax doesn’t support passing keys, I have to write <Fragment> explicitly
  import { Fragment } from 'react';
  
  export function Poem2() {
    return (
      <article>
        {poem.lines.map((line, i) =>
          <Fragment key={i}>
            {i > 0 && <hr />}
            <p>{line}</p>
          </Fragment>
        )}
      </article>
    );
  }