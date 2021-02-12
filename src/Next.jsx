import React, {useState}  from 'react';

const Next = () => {

    let time = new Date().toLocaleTimeString();

    const [ ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime,1000);
    return(
        <div className="clock">
        <h1> Digital Clock </h1>
        <h1> {ctime} </h1>
        {/* <button onClick={UpdateTime}> Get Current Time </button> */}
        </div>
    );
};
export default Next;