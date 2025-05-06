import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './Greetings.jsx';
import AnimalList from './practice-rendering-techniques/AnimalList.jsx';
import PackingList from './practice-conditional-rendering/PackingList.jsx';
import { List4 } from './practice-rendering-lists/RenderingLists.jsx';
import { RecipeList2 } from './practice-rendering-lists/RenderingLists.jsx';
import { Poem2 } from './practice-rendering-lists/RenderingLists.jsx';
import { TodoList } from './practice-using-keys/UsingKeys.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting /> */}
    {/* <AnimalList /> */}
    {/* <PackingList />   */}
    {/* <List4 /> */}
    {/* <RecipeList2 /> */}
    {/* <Poem2 /> */}
    <TodoList />
  </StrictMode>,
)
