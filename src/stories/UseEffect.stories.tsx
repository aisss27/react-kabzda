import React, {useCallback, useEffect, useMemo, useState} from 'react';
export default {
    title: "usEffect Demo"
}




export const UseEffect = () => {
    const [fake,setFake] = useState(1)
    const [counter,setCounter] = useState(1);

    console.log('Component')
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, []);


    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    }, [counter]);


    return(
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake => fake + 1)}>+</button>
            <button onClick={() => setCounter(counter => counter + 1)}>+</button>
        </>
    )
}
