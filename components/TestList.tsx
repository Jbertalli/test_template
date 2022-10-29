import React, { useState, useEffect } from 'react';
import { Divider, Button, Modal, Icon } from 'semantic-ui-react';
import Grade from '../components/Grade'; 

// const LOCAL_STORAGE_KEY_QUESTIONS = 'questions';

export default function TestList({ deleteQuestion, testQuestions, questionNumber, answerNumber, studentAnswer, setStudentAnswer, score, setScore, total, setTotal }) {
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(false);

    // console.log(deleteQuestion);

    const questions = testQuestions.map(testQuestions => {

        // console.log(testQuestions.id);

        return (
            <>  
            <ul key={testQuestions.id}>
                <div style={{ transform: 'translateY(20px)' }}>
                    <div style={{ fontSize: '30px', paddingBottom: '10px' }}>
                        <h2>
                            Question #{questionNumber += 1}:{' '}
                            <span style={{ fontWeight: '100' }}>
                                {testQuestions.name}
                            </span>
                        </h2>
                    </div>
                    {!student ? (
                    <>
                        {revealAnswer ? (
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
                        )}
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
                    <input
                        type='testQuestions'
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
                <Divider />
            </ul>
            </>
        )
    })

    // useEffect(() => {
    //     setQues(questions);
    // }, [questions.length])

    // console.log(questions);
    // console.log(ques);

    // questions
    // useEffect(() => {
    //     const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUESTIONS))
    //     if (storedName) setQues(storedName)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QUESTIONS, 
    //     JSON.stringify(ques))
    //   }, [ques]);

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

    console.log(questions.length);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {student ? (
                <>
                    <Button
                        onClick={() => setStudent(false)}
                    >
                        Administrator
                    </Button>
                </>
                ):(
                <>
                    <Button
                        onClick={() => setStudent(true)}
                    >
                        Student
                        <Icon
                            name="pencil"
                            style={{ transform: 'translate(15px) scale(1.4)' }}
                        />
                    </Button>
                </>
                )}
            </div>
            <Divider />
            <div key={testQuestions.id} style={{ padding: '10px' }}>
                {questions}
            </div>
        </>
    );
}
