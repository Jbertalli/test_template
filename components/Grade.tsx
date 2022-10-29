import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function Grade({ testQuestions, studentAnswer, setStudentAnswer, score, setScore, total, setTotal }) {
    const [correct, setCorrect] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [gradeClicked, setGradeClicked] = useState<boolean>(false);
    const [graded, setGraded] = useState<boolean>(false);

    // let array = [];

    // for(let i = 0; i < studentAnswer.length; i++) {
    //     array.push(studentAnswer[i])
    // }

    // let full = array.join('')

    // console.log(full);
    const grade = function() {
        if (testQuestions.value == studentAnswer) {
            setCorrect(true);
            setScore(score + 1);
        } else {
            setCorrect(false);
            // setScore(score - 1);
        }
    }

    // console.log('Test Question:', testQuestions.value);
    // console.log('StudentAnswer:', studentAnswer);
    // console.log('score:', score);

    return (
        <>
            {submitted ? (
            <>
                {/* <Button
                    color="blue"
                >
                    Submit
                </Button> */}
            </>
            ):(
            <>
                {/* {gradeClicked ? (
                <>
                    <Button
                        color="red"
                        onClick={() => {setGradeClicked(false), setTotal(total - 1)}}
                    >
                        Redo Grade
                    </Button>
                </>
                ):(
                <>
                    <Button
                        color="green"
                        onClick={() => {grade(), setGraded(true), setGradeClicked(true), setTotal(total + 1)}}
                    >
                        Grade
                    </Button>
                </>
                )} */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -100%) scale(0.8)' }}>
                    <Button
                        disabled={gradeClicked}
                        color="green"
                        // onMouseOver={() => }
                        onClick={() => {grade(), setGraded(true), setGradeClicked(true), setTotal(total + 1)}}
                    >
                        Grade
                    </Button>
                </div>
            </>
            )}
            <div style={{ marginTop: '10px', transform: 'translateY(-10px)' }}>
                {graded ? (
                <>
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
                ): null}
            </div>
        </>
    );
}
