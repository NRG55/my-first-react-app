import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function MyAppUpdatingObjectViaContext() {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <CurrentUserContext
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            <Form/ >
        </CurrentUserContext>
    );
};

function Form({ children}) {
    return (
        <Panel title="Welcome">
            <LoginButton />
        </Panel>
    );
};

function LoginButton() {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}.</p>
    };

    return (
        <Button onClick={() => {setCurrentUser({ name: 'Dima' })}}>
            Log in as Dima
        </Button>
    );
};

function Panel({ title, children }) {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    );
};

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};
