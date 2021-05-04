import React, { useEffect, useState } from 'react';

function SimpleCounter() {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(0);

    const loopTime = 4;

    // Call when count is changing
    useEffect(() => {
        updateStatus();
    }, [count])   
     
    function plus(time) {
        let newCount = count + time
        setCount(newCount)
    }
    function minus(time){
        let newCount = count - time
        setCount(newCount)
    }
    function devide(time){
        let newCount = count / time
        setCount(newCount)

    }
    function multiple(time){
        let newCount = count * time
        setCount(newCount)
    }
    function updateStatus() {
        if(count > 0){
            setStatus('positive')
        }else if(count < 0){
            setStatus('negative')
        }else{
            setStatus('')
        }
    }
    
    return (
        <div>

            <h2>Simple counter</h2>
            
            <code className={`counter ${status}`}>{count}</code>
            <br /> <br />
            {Array.from({ length: loopTime }, (_, k) => (
                <button key={k}onClick={() => {minus(k+1)}} type='button'>-{k+1}</button>
            ))}
            <button className="multi-dev" onClick={() => setCount(0)} type='button'>Reset</button>

            {Array.from({ length: loopTime }, (_, k) => (
                <button key={k}onClick={() => {plus(k+1)}} type='button'>+{k+1}</button>
            ))}
            <br /> <br />
            <button className="multi-dev" onClick={() => {devide(2)}} type='button'>Devide by 2</button>
            <button className="multi-dev" onClick={() => {multiple(2)}} type='button'>Multiple by 2</button>

        </div>
    );
    
}


export default SimpleCounter;