import React, { useState } from 'react';
const Child = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col'>
                <div className='text-center my-3'>{count}</div>
                <div>
                    <button className='btn btn-outline mr-3' onClick={() => setCount(count - 1)}>Decrement</button>
                    <button onClick={() => setCount(prevState => (prevState + 1))} className='btn btn-outline'>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Child;