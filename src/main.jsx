import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import Greeting from './Greetings.jsx';
// import AnimalList from './practice-rendering-techniques/RerenderTechniques.jsx';
// import PackingList from './practice-conditional-rendering/PackingList.jsx';
// import { List4 } from './practice-rendering-lists/RenderingLists.jsx';
// import { RecipeList2 } from './practice-rendering-lists/RenderingLists.jsx';
// import { Poem2 } from './practice-rendering-lists/RenderingLists.jsx';
// import { TodoList } from './practice-using-keys/UsingKeys.jsx';
// import { RenderButtons } from './practice-passing-data-between-components/PassingData.jsx';
// import { Profile4 } from './practice-passing-data-between-components/PassingData.jsx';
// import { GalleryV2 } from './practice-passing-data-between-components/PassingData.jsx';
// import { ProfileV3 } from './practice-passing-data-between-components/PassingData.jsx';
// import { GalleryState2 } from './practice-state/State';
// import { Form } from './practice-state/State';
// import { FeedbackForm } from './practice-state/State';
import { FeedbackForm2 } from './practice-state/State-introduction';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting /> */}
    {/* <AnimalList /> */}
    {/* <PackingList />   */}
    {/* <List4 /> */}
    {/* <RecipeList2 /> */}
    {/* <Poem2 /> */}
    {/* <TodoList /> */}
    {/* < RenderButtons /> */}
    {/* <Profile4 /> */}
    {/* <GalleryV2 /> */}
    {/* <ProfileV3 /> */}
    {/* <GalleryState2 />     */}
    {/* <Form /> */}
    {/* <FeedbackForm /> */}
    <FeedbackForm2 />
  </StrictMode>,
)
