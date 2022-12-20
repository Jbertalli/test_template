import React, { useState } from 'react';

export default function Answer({ c, index }: any) {
    const [item, setItem] = useState([''])

    // function saveAnswer() {
    //         console.log(item)
    //         setItem([...item, ''])
    // }

   const setInput = (index) => (e) => {
       item.splice(index, 1, e.target.value);
       setItem([...item]);
       console.log(item)
   }

    return (
        <>
            <div>
                <input
                    type='text'
                    key={index}
                    value={c}
                    onChange={setInput(index)}
                />
                {item}
            </div>
        </>
    )
}
