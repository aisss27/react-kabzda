import React, {useMemo, useState} from 'react';
export default {
    title: "useMemo"
}

export const Example1 = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for(let i = 1; i <= a; i++){
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    resultB = useMemo(() => {
        let tempResultB = 1;
        for(let i = 1; i <= b; i++){
            resultB = resultB * i;
        }
        return tempResultB;
    }, [b]);


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: {users:Array<string>}) => {
    return <div>{props.users.map((u,i) => <div key={i}>
        {u}
    </div>)}
    </div>
}

const Users = React.memo(UsersSecret);
export const HelpsToReact = () => {
    console.log("Helps to ReactMemo")
    const [counter,setCounter] = useState(0);
    const [users,setUsers] = useState(["Ais",'Amina','Arman'])

    const newArray = useMemo(() => {
      return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    },[users]);

    const addUser = () => {
        let newUser = "Usera";
        setUsers([...users, newUser])
    }
    return(
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}
