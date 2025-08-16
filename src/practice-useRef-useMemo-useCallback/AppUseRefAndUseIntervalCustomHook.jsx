import { useState, useEffect, useRef } from 'react';
 
export default function Counter() {
    let [count, setCount] = useState(0);    
    
    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, 1000);
    
    return <h1>{count}</h1>;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
   
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);

            return () => clearInterval(id);
        }
        
    }, [delay]);
}

// The difference between the setInterval and useInterval Hook is that its arguments are “dynamic”

function Counter2() {
    let [count, setCount] = useState(0);
    let [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);
    
    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, isRunning ? delay : null);
    
    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }
    
    return (
        <>
        <h1>{count}</h1>
        <input value={delay} onChange={handleDelayChange} />
        </>
    );
}