import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {clearInterval} from 'timers';
export default {
    title: "usEffect Demo"
}




export const UseEffectExample = () => {
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


export const SetIntervalExample = () => {
    const [fake,setFake] = useState(1)
    const [counter,setCounter] = useState(1);

    console.log('SetTimeoutExample')
    useEffect(() => {
        // setTimeout(() => {
        //     console.log('SetTimeout');
        //     document.title = counter.toString();
        // }, 1000)

       const intervalId = setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(counter+1);
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    },[counter]);


    return(
        <>
            Hello, counter: {counter} - fake: {fake}
            <button onClick={() => setFake(fake => fake + 1)}>+</button>

        </>
    )
}


export const RealTime = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        },1000)
    }, []);

    return(
        <>
            {time.toLocaleString()}

        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0);

    console.log('Component rendered with ' + counter)
    useEffect(() => {
        console.log('Effect occured: ' + counter);

    return () => {
        console.log('Reset Effect');
    }
    }, [counter]);

    const increase = () => {setCounter(counter+1)}

    return(
        <>
            hello, counter: {counter}
            <button onClick={increase}>+</button>

        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
       window.addEventListener('keypress', handler)
        return () => {
           window.removeEventListener('keypress', handler)
        }
    }, [text]);



    return(
        <>
            Typed text: {text}

        </>
    )
}


export const SetTimeoutExample1 = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)
    useEffect(() => {

      const timeoutId = setTimeout(() => {
          console.log('Timeout expired')
          setText('3 seconds passed')
      },3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text]);



    return(
        <>
            Typed text: {text}

        </>
    )
}
