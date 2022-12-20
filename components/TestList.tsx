import React, { useState, useEffect, useRef } from 'react';
import { Divider, Button, Modal, Container, Icon } from 'semantic-ui-react';
import AnswerKey from './AnswerKey';
import Grade from '../components/Grade'; 
import { v4 as uuidv4 } from 'uuid'; 
import emailjs from 'emailjs-com';
import Answer from '../components/Answer';

export default function TestList({ deleteQuestion, testQuestions, questionNumber, answerNumber, studentAnswer, setStudentAnswer, score, setScore, total, setTotal }) {
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);
    // const [open, setOpen] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(false);
    const [arr2, setArr2] = useState<any>([]);
    const [answersArray, setAnswersArray] = useState<any>([]);
    const [openAnswerKey, setOpenAnswerKey] = useState<boolean>(false);
    // const [arr3, setArr3] = useState<any>([]);
    const [openGrade, setOpenGrade] = useState<boolean>(false);
    const [serviceList, setServiceList] = useState([{ service: '' }]);
    const studentAnswerNameRef = useRef<any>();
    const form = useRef();

    console.log(serviceList);

    let arr = []

    for (let i = 0; i < serviceList.length; i++) {
        console.log(serviceList[i].service);
        arr.push(serviceList[i].service);
    }

    console.log('array answers', arr);

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

    // console.log(deleteQuestion);

    function handleSaveAnswer(e) {
        const answer = studentAnswerNameRef.current.value;
        console.log(studentAnswerNameRef.current.value);

        if (answer === '') return 
        
        const aid = uuidv4();

        setAnswersArray(prevAnswers => {
            return [...prevAnswers, { id: aid, name: answer }]
        })

        // console.log(answer);
        // console.log(id);

        studentAnswerNameRef.current.value = null;
    }

    console.log(answersArray);
    console.log(testQuestions);

    let counting = []

    for (let i = 0; i < answersArray.length; i++) {
        counting.push([answersArray[i].name]);
        // console.table(counting);
    }

    let fruits = []

    for (let i = 0; i < answersArray.length; i++) {
        fruits.push(counting.flat()[i]);
    }

    console.log('%c Student Answers', 'color: green', fruits);

    let counting1 = []

    for (let j = 0; j < testQuestions.length; j++) {
        counting1.push([testQuestions[j].value]);
        // console.table(counting1);
    }

    let fruits1 = []

    for (let j = 0; j < testQuestions.length; j++) {
        fruits1.push(counting1.flat()[j]);
    }

    console.log('%c Test Answers', 'color: blue', fruits1);

    let combined = fruits1.concat(fruits);
    
    console.log(combined);

    const totalCorrect = fruits.reduce(
        (correctSoFar, answer, i) => correctSoFar + (answer === fruits1[i]),
        0
    );

    // useEffect(() => {
    //     if (fruits1.length === 0) {
    //         console.log('zero');
    //     } else if ((fruits1.length === 1) && (fruits[0] === fruits1[0])) {
    //         console.log('correct');
    //     } else {
    //         console.log('incorrect');
    //     }
    // }, [fruits.length])

    // console.log(fruits.length);

    // useEffect(() => {
    //     for (let i = 0; i < answersArray.length; i++) {
    //         let answerGrade = answersArray[i].name;
    //         let questionGrade = testQuestions[i].value;
    //         if ((answersArray.length > 0) && (answerGrade == questionGrade)) {
    //             console.log(true);
    //         } else {
    //             console.log(false);
    //         }
    //     }
    // }, [answersArray])

    // console.log(answersArray.length)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jj71xm9', 'template_roux4nq', form.current, 'FlrSx29zmJDjwJhtt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // fields on form are reset after submit
        e.target.reset();
    }

    const questions = testQuestions.map(testQuestions => {

        // console.log(testQuestions.id);

        return (
            <>  
                <ul key={testQuestions.id}>
                    <div style={{ transform: 'translateY(20px)' }}>
                        {/* <div style={{ fontSize: '30px', paddingBottom: '10px' }}>
                            <h2>
                                Question #{questionNumber += 1}:{' '}
                                <span style={{ fontWeight: '100' }}>
                                    {testQuestions.name}
                                </span>
                            </h2>
                        </div> */}
                        {!student ? (
                        <>
                            {/* {revealAnswer ? (
                            <>
                                <div style={{ fontSize: '20px', color: 'red' }}>
                                    Answer #{answerNumber += 1}:{' '}
                                    <span>
                                        {testQuestions.value}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -140%) scale(0.8)' }}>
                                    <Button
                                        color="blue"
                                        onClick={() => setRevealAnswer(false)}
                                    >
                                        Hide Answer
                                    </Button>
                                </div>
                            </>
                            ):(
                            <>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -120%) scale(0.8)' }}>
                                    <Button
                                        color="blue"
                                        onClick={() => setRevealAnswer(true)}
                                    >
                                        Show Answer
                                    </Button>
                                </div>
                            </>
                            )} */}
                        </>
                        ): null}
                    </div>
                    {/* <Button
                        onClick={() => setOpen(true)}
                    >
                        Answer Question
                    </Button>
                    <Modal open={open}>
                        <Button
                            style={{ borderRadius: '50px' }}
                            onClick={() => setOpen(false)}
                        >
                            X
                        </Button>
                        <div>
                            <input
                                placeholder="Student Answer"
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
                                onChange={(e) => setStudentAnswer(e.target.value)}
                            />
                            <Grade testQuestions={testQuestions} studentAnswer={studentAnswer} setStudentAnswer={setStudentAnswer} score={score} setScore={setScore} total={total} setTotal={setTotal} />
                        </div>
                    </Modal> */}
                    <div>
                        {/* <input
                            ref={studentAnswerNameRef}
                            type='text'
                            placeholder="Student Answer"
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
                            onChange={(e) => setStudentAnswer(e.target.value)}
                        />
                        <Button
                            color='blue'
                            onClick={handleSaveAnswer}
                            style={{
                                cursor: 'hover'
                            }}
                        >
                            Save
                        </Button> */}
                        <Answer questionNumber={questionNumber} student={student} setStudent={setStudent} />
                        {/* <h3>
                            {studentAnswer}
                        </h3> */}
                        {/* <Grade answersArray={answersArray} arr2={arr2} testQuestions={testQuestions} studentAnswer={studentAnswer} setStudentAnswer={setStudentAnswer} score={score} setScore={setScore} total={total} setTotal={setTotal} /> */}
                    </div>
                    <Divider />
                </ul>
            </>
        )
    })

    // return (
    // serviceList.map((singleService, index) => (
    //     <div key={index}>
    //         <div>
    //             <input
    //                 name='service'
    //                 type='text'
    //                 id='service'
    //                 required
    //                 value={singleService.service}
    //                 onChange={(e) => handleServiceChange(e, index)}
    //             />
    //             {serviceList.length - 1 === index && serviceList.length < 4 && (
    //                 <button
    //                     type='button'
    //                     onClick={handleAddService}
    //                 >
    //                 <span>Add a Service</span>
    //                 </button>
    //             )}
    //         </div>
    //         <div>
    //             {serviceList.length !== 1 && (
    //                 <button
    //                     type='button'
    //                     onClick={() => handleServiceRemove(index)}
    //                 >
    //                     <span>Remove</span>
    //                 </button>
    //             )}
    //         </div>
    //     </div>
    // ))
    // )

    // useEffect(() => {
    //     setQues(questions);
    // }, [questions.length])

    // console.log(questions);
    // console.log(ques);

    // const sliced = questions.slice(0, 1);
    // console.log(sliced);

    // const reversed = questions.reverse();
    // console.log(reversed);

    // const shifted = reversed.shift();
    // console.log(shifted);

    // const popped = questions.pop();
    // console.log(popped);

    // const spliced = questions.splice(`${clear}`, 1);
    // console.log(spliced);
    // console.log(questions);

    // let arr = questions;
    // delete arr[deleteQuestion]
    // console.log(arr);
    // console.log(typeof arr);

    // console.log(questions);
    // // console.log(questions.length);

    // let array = []
    // let array1 = []

    // useEffect(() => {
    //     for(let i = 0; i < questions.length; i++) {
    //         let count = i;
    //         let consoled = questions[`${count}`].props.children.props.children[0].props.children[0].props.children.props.children[4].props.children
    //         // console.log(consoled);
    //         array.push(consoled);
    //         // console.log(array);
    //         setArr2(array);
    //     }
    // }, [questions.length])

    // useEffect(() => {
    //     for(let j = 0; j < questions.length; j++) {
    //         let count1 = j;
    //         let consoled1 = questions[`${count1}`].props.children.props.children[1].props.children[1].props.studentAnswer;
    //         array1.push(consoled1);
    //         setArr3(array1);
    //     }
    // }, [studentAnswer])

    // console.log(arr2);
    // console.log(arr3);
    // console.log(questions);

    return (
        <>
            {!student ? (
            <>              
                <h1
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'translateY(-6px)'
                    }}
                >
                    Admin View
                </h1>
                <Divider />
                {(fruits1 && fruits1.length > 0) ? (
                <> 
                    {!openAnswerKey ? (
                    <>
                        <div
                            style={{ 
                                transform: 'translateY(-8px)',
                                cursor: 'pointer' 
                            }}
                            onClick={() => {setOpenAnswerKey(true)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    color: '#125CA1',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '18px', 
                                    fontWeight: '500',
                                    color: '#125CA1'
                                }}
                            >
                                Open Answer Key
                            </div>
                        </div>
                        <Divider />
                    </>
                    ):(
                    <>
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(0vw, -5px)'
                            }}
                                onClick={() => setOpenAnswerKey(false)}
                        >
                            <div
                                style={{
                                    transform: 'scale(2)',
                                    zIndex: '10'
                                }}
                            >
                                x
                            </div>
                        </Container>
                        <div
                            style={{
                                marginBottom: '15px',
                                transform: 'translateY(-15px)'
                            }}
                        >
                            <AnswerKey fruits1={fruits1} />
                        </div>
                        <Divider />
                    </>
                    )}
                </>
                ): null}
            </>
            ):(
            <>
                <h1
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'translateY(-6px)'
                    }}
                >
                    Student View
                </h1>
                <Divider />
            </>
            )}
            {student ? (
            <>
                {openGrade ? (
                <>
                    <div>
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(0vw, -5px)'
                            }}
                                onClick={() => setOpenGrade(false)}
                        >
                            <div
                                style={{
                                    transform: 'scale(2)',
                                    zIndex: '10'
                                }}
                            >
                                x
                            </div>
                        </Container>
                    </div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            marginBottom: '0px',
                                        }}
                                    >
                                        Name
                                    </h3>
                                    <input 
                                        type="text" 
                                        name="user_name"
                                        style={{
                                            padding: '9px 14px 9px 14px', 
                                            fontSize: '14px', 
                                            fontWeight: '400', 
                                            cursor: 'text', 
                                            width: '178.5px', 
                                            borderRadius: '4px', 
                                            border: '1px solid rgba(34, 36, 38, 0.15)',
                                            position: 'relative',
                                            zIndex: '1000'
                                        }} 
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            marginBottom: '0px',
                                            marginTop: '10px'
                                        }}
                                    >
                                        Email
                                    </h3>
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        style={{
                                            padding: '9px 14px 9px 14px', 
                                            fontSize: '14px', 
                                            fontWeight: '400', 
                                            cursor: 'text', 
                                            width: '178.5px', 
                                            borderRadius: '4px', 
                                            border: '1px solid rgba(34, 36, 38, 0.15)',
                                            position: 'relative',
                                            zIndex: '1000'
                                        }}     
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            marginBottom: '0px',
                                            marginTop: '10px'
                                        }}
                                    >
                                        Message
                                    </h3>
                                    <textarea name="message" />
                                </div>
                            </div>
                            <div
                                style={{
                                    marginBottom: '0px',
                                    marginTop: '10px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <input 
                                    type="submit" 
                                    value="Send"
                                    style={{
                                        padding: '9px 14px 9px 14px', 
                                        fontWeight: '400',
                                        cursor: 'pointer', 
                                        width: '80px', 
                                        borderRadius: '4px', 
                                        border: '1px solid rgba(34, 36, 38, 0.15)',
                                        position: 'relative',
                                        zIndex: '1000',
                                        background: 'rgba(18, 92, 161, .90)',
                                        color: 'white'
                                    }}  
                                />
                            </div>
                        </form>
                    </div>
                </>
                ):(
                <>
                    <div
                        style={{ 
                            transform: 'translateY(-8px)',
                            cursor: 'pointer' 
                        }}
                        onClick={() => {setOpenGrade(true)}}
                    >
                        <div 
                            style={{ 
                                marginLeft: '-25px',
                                display: 'flex',
                                color: '#125CA1',
                                transform: 'translateY(100%) scale(0.8)'
                            }}
                        >
                            <Icon
                                name='chevron down'
                            />
                        </div>
                        <div
                            style={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '18px', 
                                fontWeight: '500',
                                color: '#125CA1'
                            }}
                        >
                            Email Your Grade
                        </div>
                    </div>
                </>
                )}
                <Divider />
            </>
            ): null}
            <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center' 
                }}
            >
                {student ? (
                <>
                    <Button
                        onClick={() => setStudent(false)}
                    >
                        Switch to Admin
                    </Button>
                </>
                ):(
                <>
                    <Button
                        onClick={() => setStudent(true)}
                    >
                        Switch to Student
                        <Icon
                            name="pencil"
                            style={{ transform: 'translate(15px) scale(1.4)' }}
                        />
                    </Button>
                </>
                )}
            </div>
            <Divider />
            <div key={testQuestions.id} id={uuidv4()} style={{ padding: '10px' }}>
                {questions}
            </div>
            {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'translateY(50vh)'
                }}
            >
                <form autoComplete='off'>
                    <div>
                        {serviceList.map((singleService, index) => (
                            <div key={index}>
                                <div>
                                    <div>
                                        {questions[index]}
                                    </div>
                                    <input
                                        name='service'
                                        type='text'
                                        id='service'
                                        required
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                    />
                                    {serviceList.length - 1 === index && (
                                        <button
                                            type='button'
                                            onClick={handleAddService}
                                        >
                                        <span>Add a Service</span>
                                        </button>
                                    )}
                                </div>
                                <div>
                                    {serviceList.length !== 1 && (
                                        <button
                                            type='button'
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2>Output</h2>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                                <ul key={index}>
                                    {singleService.service && <li>{singleService.service}</li>}
                                </ul>
                            ))}
                    </div>
                </form>
            </div> */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button
                    color='blue'
                >
                    Grade Test
                </Button>
            </div>
            <Divider />
        </>
    );
}
