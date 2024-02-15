import React, {useCallback, useMemo, useState} from 'react';
export default {
    title: "useState Demo"
}



function generateData(){
    console.log('called func')
    return 1;
}

export const UseState = () => {
    console.log("UseState")
    const [counter,setCounter] = useState<number>(generateData);



    return(
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}
