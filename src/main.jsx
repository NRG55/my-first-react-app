import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './Greetings.jsx';
import AnimalList from './AnimalList.jsx';
import PackingList from './PackingList.jsx';
import { List4 } from './RenderingLists.jsx';
import { RecipeList2 } from './RenderingLists.jsx';
import { Poem2 } from './RenderingLists.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting /> */}
    {/* <AnimalList /> */}
    {/* <PackingList />   */}
    {/* <List4 /> */}
    {/* <RecipeList2 /> */}
    <Poem2 />
  </StrictMode>,
)
