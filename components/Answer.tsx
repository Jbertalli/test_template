import { getRandomValues } from 'crypto';
import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';

export default function Answer({ value, c, index, questionNumber, student, setStudent }: any) {
    const [item, setItem] = useState(['']);
    const [serviceList, setServiceList] = useState([{ service: '' }]);
    const [answ, setAnsw] = useState<string>('');
    const [quest, setQuest] = useState<string>('');
    const [studentAnsw, setStudentAnsw] = useState<string>('');
    const [showGrade, setShowGrade] = useState<boolean>(false);
    // const [correct, setCorrect] = useState<string>('correct');
    const [correct, setCorrect] = useState<boolean>(false);
    const [grade, setGrade] = useState<boolean>(false);
    // const [count, setCount] = useState<number>(0);
    // const [saveQuestion, setSaveQuestion] = useState<boolean>(false);

    console.log(serviceList);

    let arr = []

    for (let i = 0; i < serviceList.length; i++) {
        console.log(serviceList[i].service);
        arr.push(serviceList[i].service);
    }

    console.log(arr);

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    }

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    const handleAddService = () => {
        setServiceList([...serviceList, { service: '' }])
    }

    // function saveAnswer() {
    //         console.log(item)
    //         setItem([...item, ''])
    // }

//    const setInput = (index) => (e) => {
//        item.splice(index, 1, e.target.value);
//        setItem([...item]);
//        console.log(...item);
//    }

//     console.log(item);

    console.log(quest);
    console.log(answ);
    console.log(studentAnsw);

    useEffect(() => {
        if ((quest && answ && studentAnsw) && (answ.toLowerCase() === studentAnsw.toLowerCase())) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }, [studentAnsw])

    useEffect(() => {
        setGrade(false);
    }, [studentAnsw])

    return (
        <>
            {/* <div>
                <input
                    type='text'
                    key={index}
                    value={c}
                    onChange={setInput(index)}
                />
                {item}
            </div> */}

            

            <form autoComplete='off'>
                    <div>
                        {serviceList.map((singleService, index) => (
                            <div key={index}>
                                <div>
                                    <h1>
                                        Question #{questionNumber += 1}:{' '}
                                    </h1>
                                    {/* {saveQuestion ? (
                                    <>
                                        <div>
                                            {quest}
                                        </div>
                                        <Button
                                            onClick={() => setSaveQuestion(false)}
                                        >
                                            Edit
                                        </Button>
                                    </>
                                    ):(
                                    <> */}
                                        <input
                                            type='text'
                                            placeholder='Question #1'
                                            onChange={(e) => setQuest(e.target.value)}
                                            style={{ 
                                                padding: '9px 14px 9px 14px', 
                                                fontSize: '14px', 
                                                fontWeight: '400', 
                                                cursor: 'text', 
                                                width: '178.5px', 
                                                borderRadius: '4px', 
                                                border: '1px solid rgba(34, 36, 38, 0.15)',
                                                position: 'relative', 
                                                zIndex: '100' 
                                            }}
                                        />
                                        <div>
                                            {quest}
                                        </div>
                                        {/* <Button
                                            onClick={() => setSaveQuestion(true)}
                                        >
                                            Save
                                        </Button> */}
                                    {/* </>
                                    )} */}
                                    

                                   
                                    {/* {!student ? (
                                    <> */}
                                        <h1>
                                            Answer #1
                                        </h1>
                                        <input
                                            type='text'
                                            placeholder='Answer #1'
                                            onChange={(e) => setAnsw(e.target.value)}
                                            style={{ 
                                                padding: '9px 14px 9px 14px', 
                                                fontSize: '14px', 
                                                fontWeight: '400', 
                                                cursor: 'text', 
                                                width: '178.5px', 
                                                borderRadius: '4px', 
                                                border: '1px solid rgba(34, 36, 38, 0.15)',
                                                position: 'relative', 
                                                zIndex: '100' 
                                            }}
                                        />
                                        <div>
                                            {answ}
                                        </div>
                                    {/* </>
                                    ):null} */}
                                    <h1>
                                        Student Answer #1
                                    </h1>
                                    <input
                                        type='text'
                                        placeholder='Student Answer #1'
                                        onChange={(e) => setStudentAnsw(e.target.value)}
                                        style={{ 
                                            padding: '9px 14px 9px 14px', 
                                            fontSize: '14px', 
                                            fontWeight: '400', 
                                            cursor: 'text', 
                                            width: '178.5px', 
                                            borderRadius: '4px', 
                                            border: '1px solid rgba(34, 36, 38, 0.15)',
                                            position: 'relative', 
                                            zIndex: '100' 
                                        }}
                                    />
                                    <div>
                                        {studentAnsw}
                                    </div>
                                    {/* <input
                                        name='service'
                                        type='text'
                                        id='service'
                                        required
                                        placeholder='Student Answer #1'
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                    />
                                    {serviceList.length - 1 === index && serviceList.length < 1 && (
                                        <button
                                            type='button'
                                            onClick={handleAddService}
                                        >
                                        <span>Add a Service</span>
                                        </button>
                                    )} */}
                                </div>
                                <Divider />
                                {(answ && quest && studentAnsw) ? (
                                <>
                                    {grade ? (
                                    <>
                                        {/* {correct} */}
                                        {correct ? (
                                        <>
                                            <div style={{ fontSize: '30px', fontWeight: '500', color: 'green' }}>
                                                <Icon
                                                    name="check"
                                                />
                                                <span>
                                                    Correct
                                                </span>  
                                            </div>
                                        </>
                                        ):(
                                        <>
                                            <div style={{ fontSize: '30px', fontWeight: '500', color: 'red' }}>
                                                <Icon
                                                    name="plus"
                                                    style={{ transform: 'rotate(45deg)' }}
                                                />
                                                <span>
                                                    Incorrect
                                                </span>
                                            </div>
                                        </>
                                        )}
                                    </>
                                    ):(
                                    <>
                                        <Button
                                            color='green'
                                            onClick={() => setGrade(true)}
                                        >
                                            Grade Question
                                        </Button>
                                    </>
                                    )}
                                </>
                                ): null}
                                {/* <div>
                                    {serviceList.length !== 1 && (
                                        <button
                                            type='button'
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove</span>
                                        </button>
                                    )}
                                </div> */}
                            </div>
                        ))}
                    </div>
                    <div>
                        {/* <h2>Output</h2> */}
                        {/* {serviceList &&
                            serviceList.map((singleService, index) => (
                                <div key={index}>
                                    {singleService.service && <li>{singleService.service}</li>}
                                </div>
                            ))} */}
                    </div>
                </form>
        </>
    )
}
