import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Icon, Divider, Container } from 'semantic-ui-react';
import TestList from '../components/TestList';
import { v4 as uuidv4 } from 'uuid';    
import FocusLock from 'react-focus-lock';
import Delete from '../components/Delete';
import styles from '../styles/Home.module.css';

const LOCAL_STORAGE_KEY_NAME = 'Name';
const LOCAL_STORAGE_KEY_CLICK_NAME = 'ClickName';
const LOCAL_STORAGE_KEY_DATE = 'Date';
const LOCAL_STORAGE_KEY_CLICK_DATE = 'ClickDate';
const LOCAL_STORAGE_KEY_TITLE = 'Title';
const LOCAL_STORAGE_KEY_CLICK_TITLE = 'ClickTitle';
// const LOCAL_STORAGE_KEY_NEW_QUESTION = 'NewQuestion';
// const LOCAL_STORAGE_KEY_QUESTION = 'Question';
// const LOCAL_STORAGE_KEY_ANSWER = 'Answer';
// const LOCAL_STORAGE_KEY_STUDENT_ANSWER = 'StudentAnswer';
const LOCAL_STORAGE_KEY_TEST_QUESTION = 'TestQuestion';
// const LOCAL_STORAGE_KEY_QUESTION_NUMBER = 'QuestionNumber';
// const LOCAL_STORAGE_KEY_ANSWER_NUMBER = 'AnswerNumber';
// const LOCAL_STORAGE_KEY_SETSTUDENTANSWER = 'SetStudentAnswer';
// const LOCAL_STORAGE_KEY_SCORE = 'Score';
// const LOCAL_STORAGE_KEY_SETSCORE = 'SetScore';
// const LOCAL_STORAGE_KEY_TOTAL = 'Total';
// const LOCAL_STORAGE_KEY_SETTOTAL = 'SetTotal';

export default function Test() {
    const [newQuestion, setNewQuestion] = useState<boolean>(true);
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [studentAnswer, setStudentAnswer] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [nameClicked, setNameClicked] = useState<boolean>(false);
    const [dateClicked, setDateClicked] = useState<boolean>(false);
    const [titleClicked, setTitleClicked] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [questionNumber, setQuestionNumber] = useState<any>(0);
    const [answerNumber, setAnswerNumber] = useState<any>(0);
    const [testQuestions, setTestQuestions] = useState<any>([]);
    const [letterGrade, setLetterGrade] = useState<any>(null);
    const [color, setColor] = useState<string>('');
    const [deleteQuestion, setDeleteQuestion] = useState<any>(null);
    const [finalGrade, setFinalGrade] = useState<any>(0);
    const [graded, setGraded] = useState<boolean>(false);
    const questionNameRef = useRef<any>();
    const answerNameRef = useRef<any>();
    // const [correct, setCorrect] = useState<string>('');

    // Name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        if (storedName) setName(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, 
        JSON.stringify(name))
      }, [name]);

    // Name Clicked
    useEffect(() => {
        const storedClickedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_NAME))
        if (storedClickedName) setNameClicked(storedClickedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_NAME, 
        JSON.stringify(nameClicked))
      }, [nameClicked]);

    // Date
    useEffect(() => {
        const storedDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DATE))
        if (storedDate) setDate(storedDate)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DATE, 
        JSON.stringify(date))
      }, [date]);

    // Date Clicked
    useEffect(() => {
        const storedClickDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_DATE))
        if (storedClickDate) setDateClicked(storedClickDate)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_DATE, 
        JSON.stringify(dateClicked))
      }, [dateClicked]);

    // Title
    useEffect(() => {
        const storedTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TITLE))
        if (storedTitle) setTitle(storedTitle)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TITLE, 
        JSON.stringify(title))
      }, [title]);

    // Title Clicked
    useEffect(() => {
        const storedClickTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_TITLE))
        if (storedClickTitle) setTitleClicked(storedClickTitle)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_TITLE, 
        JSON.stringify(titleClicked))
      }, [titleClicked]);

    // // New Question
    // useEffect(() => {
    //     const storedNewQuestion = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NEW_QUESTION))
    //     if (storedNewQuestion) setNewQuestion(storedNewQuestion)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_NEW_QUESTION, 
    //     JSON.stringify(newQuestion))
    //   }, [newQuestion]);

    // // Question
    // useEffect(() => {
    //     const storedQuestion = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUESTION))
    //     if (storedQuestion) setQuestion(storedQuestion)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QUESTION, 
    //     JSON.stringify(question))
    //   }, [question]);

    // // Answer
    // useEffect(() => {
    //     const storedAnswer = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ANSWER))
    //     if (storedAnswer) setAnswer(storedAnswer)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_ANSWER, 
    //     JSON.stringify(answer))
    //   }, [answer]);

    // // Student Answer
    // useEffect(() => {
    //     const storedStudentAnswer = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_STUDENT_ANSWER))
    //     if (storedStudentAnswer) setStudentAnswer(storedStudentAnswer)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_STUDENT_ANSWER, 
    //     JSON.stringify(studentAnswer))
    //   }, [studentAnswer]);

    // // Test Questions
    // useEffect(() => {
    //     const storedTestQuestion = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TEST_QUESTION))
    //     if (storedTestQuestion) setTestQuestions(storedTestQuestion)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_TEST_QUESTION, 
    //     JSON.stringify(testQuestions))
    //   }, [testQuestions]);

    // // Question Number
    // useEffect(() => {
    //     const storedQuestionNumber = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUESTION_NUMBER))
    //     if (storedQuestionNumber) setQuestionNumber(storedQuestionNumber)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_QUESTION_NUMBER, 
    //     JSON.stringify(questionNumber))
    //   }, [questionNumber]);

    // // AnswerNumber
    // useEffect(() => {
    //     const storedAnswerNumber = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ANSWER_NUMBER))
    //     if (storedAnswerNumber) setAnswerNumber(storedAnswerNumber)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_ANSWER_NUMBER, 
    //     JSON.stringify(answerNumber))
    //   }, [answerNumber]);

    // // Score
    // useEffect(() => {
    //     const storedScore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SCORE))
    //     if (storedScore) setScore(storedScore)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SCORE, 
    //     JSON.stringify(score))
    //   }, [score]);

    // // Total
    // useEffect(() => {
    //     const storedTotal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOTAL))
    //     if (storedTotal) setTotal(storedTotal)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_TOTAL, 
    //     JSON.stringify(total))
    //   }, [total]);

    // // SetStudentAnswer
    // useEffect(() => {
    //     const storedStudentAnswer = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SETSTUDENTANSWER))
    //     if (storedStudentAnswer) setStudentAnswer(storedStudentAnswer)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SETSTUDENTANSWER, 
    //     JSON.stringify(studentAnswer))
    //   }, [studentAnswer]);

    // // setScore
    // useEffect(() => {
    //     const storedSetScore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SETSCORE))
    //     if (storedSetScore) setScore(storedSetScore)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SETSCORE, 
    //     JSON.stringify(score))
    //   }, [score]);

    // // setTotal
    // useEffect(() => {
    //     const storedSetTotal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SETTOTAL))
    //     if (storedSetTotal) setTotal(storedSetTotal)
    //   }, [])
    
    //   useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SETTOTAL, 
    //     JSON.stringify(total))
    //   }, [total]);

    // const grade = function() {
    //     if (answer == studentAnswer) {
    //         setCorrect('Correct');
    //         setScore(score + 1);
    //         console.log('%c Correct!', 'color: green');
    //     } else {
    //         setCorrect('Incorrect');
    //         console.log('%c Incorrect.', 'color: red');
    //     }
    // }

    function handleAddQuestion(e) {
        const quest = questionNameRef.current.value;
        const answ = answerNameRef.current.value;

        if (quest === '') return 
        if (answ === '') return 
        
        const id = uuidv4();

        setTestQuestions(prevQuestions => {
            return [...prevQuestions, { id: id, name: quest, value: answ }]
        })

        console.log(quest);
        console.log(answ);
        // console.log(id);

        questionNameRef.current.value = null;
        answerNameRef.current.value = null;
    }

    // let arr = []

    // for (let i = 0; i < testQuestions.length; i++) {
    //   arr.push([studentAnswer]);
    //   console.table(arr);
    // }

        // let consoleName = testQuestions[0]?.name;
        // console.log(JSON.stringify(testQuestions[0]?.name));
        // console.log(consoleName);
        // console.log(typeof consoleName);

        // //NO OBJECTS
        // useEffect(() => {
        //   const storedClickTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TEST_QUESTION))
        //   if (storedClickTitle) setTestQuestions(storedClickTitle)
        // }, [])
      
        // useEffect(() => {
        //   localStorage.setItem(LOCAL_STORAGE_KEY_TEST_QUESTION, 
        //   JSON.stringify())
        // }, []);

    useEffect(() => {
      setFinalGrade(((score / total) * 100).toFixed(2).replace('NaN', ''))
    }, [total])

    // console.log(typeof finalGrade);

    useEffect(() => {
        switch(true) {
            case (finalGrade >= 96.67 && finalGrade <= 100.0):
              setLetterGrade('A+');
              break;
            case (finalGrade >= 93.33 && finalGrade <= 96.67):
              setLetterGrade('A');
              break;
            case (finalGrade >= 90.0 && finalGrade <= 93.33):
              setLetterGrade('A-');
              break;
            case (finalGrade >= 86.67 && finalGrade <= 90.0):
              setLetterGrade('B+');
              break;
            case (finalGrade >= 83.33 && finalGrade <= 86.67):
              setLetterGrade('B');
              break;
            case (finalGrade >= 80.0 && finalGrade <= 83.33):
              setLetterGrade('B-');
              break;
            case (finalGrade >= 76.67 && finalGrade <= 80.0):
              setLetterGrade('C+');
              break;
            case (finalGrade >= 73.33 && finalGrade <= 76.67):
              setLetterGrade('C');
              break;
            case (finalGrade >= 70.0 && finalGrade <= 73.33):
              setLetterGrade('C-');
              break;
            case (finalGrade >= 60.0 && finalGrade <= 70.0):
              setLetterGrade('D');
              break;
            case (finalGrade >= 0.0 && finalGrade <= 60.0):
              setLetterGrade('F');
              break;
            default:
              null;
        }
    }, [finalGrade])

    useEffect(() => {
        switch(true) {
            case (letterGrade == 'A+' || letterGrade == 'A' || letterGrade == 'A-'):
              setColor('darkgreen');
              break;
            case (letterGrade == 'B+' || letterGrade == 'B' || letterGrade == 'B-'):
              setColor('green');
              break;
            case (letterGrade == 'C+' || letterGrade == 'C' || letterGrade == 'C-'):
              setColor('orange');
              break;
            case (letterGrade == 'D'):
              setColor('darkred');
              break;
            case (letterGrade == 'F'):
              setColor('red');
              break;
            default:
               null;
        }
    }, [letterGrade])

    return (
        <>
            <Head>
                <title>Test Generator</title>
                <meta name="description" content="test" />
            </Head>
            <FocusLock>
                <Container>
                    {!nameClicked ? (
                    <>
                        <div style={{ transform: 'translateY(20px)', paddingBottom: '20px' }}>
                            <h2 style={{ marginBottom: '5px' }}>
                                Name
                            </h2>
                            <input 
                                placeholder="Name"
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
                                onChange={(e) => setName(e.target.value)}
                            />
                            {(name.length > 0) ? (
                            <>
                                <span style={{  display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -36.5px) scale(0.8)' }}>
                                    <Button 
                                        color="blue"
                                        onClick= {() => setNameClicked(true)}
                                    >
                                        Save
                                    </Button>
                                </span>
                            </>
                            ): null}
                        </div>
                    </>
                    ):(
                    <>
                        <div style={{ transform: 'translateY(25px)' }}>
                            <span style={{ fontSize: '24px' }}>
                                <span style={{ fontWeight: '500' }}>
                                    Name:{' '} 
                                </span>
                                <span style={{ fontWeight: '300' }}>
                                    {name}
                                </span>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -32px) scale(0.8)' }}>
                                <Button 
                                    color="blue"
                                    onClick={() => {setName(''), setNameClicked(false)}}
                                >
                                    Edit
                                </Button>
                            </span>
                        </div>
                    </>
                    )}
                    {!dateClicked ? (
                    <>
                        <div>
                            <h2 style={{ marginBottom: '5px', marginTop: '20px' }}>
                                Date
                            </h2>
                            <input 
                                type="date"
                                placeholder="Date"
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
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {(date.length > 0) ? (
                            <>
                                <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -37px) scale(0.8)' }}>
                                    <Button 
                                        color="blue"
                                        onClick={() => setDateClicked(true)}
                                    >
                                        Save
                                    </Button>
                                </span>
                            </>
                            ):null}
                        </div>
                    </>
                    ):(
                    <>
                        <div style={{ transform: 'translateY(20px)' }}>
                            <span style={{ fontSize: '24px' }}>
                                <span style={{ fontWeight: '500' }}>
                                    Date:{' '}
                                </span>
                                <span style={{ fontWeight: '300' }}>
                                    {date}
                                </span>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -32px) scale(0.8)' }}>
                                <Button 
                                    color="blue"
                                    onClick={() => {setDate(''), setDateClicked(false)}}
                                >
                                    Edit
                                </Button>
                            </span>
                        </div>
                    </>
                    )}
                    {!titleClicked ? (
                    <>
                        <div>
                            <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px', marginTop: '20px' }}>
                                Assignment Title
                            </h2>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input 
                                    placeholder="Title"
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
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            {(title.length > 0) ? (
                            <>
                                <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -36.5px) scale(0.8)' }}>
                                    <Button 
                                        color="blue"
                                        onClick={() => setTitleClicked(true)}
                                    >
                                        Save
                                    </Button>
                                </span>
                            </>
                            ): null}
                        </div>
                    </>
                    ):(
                    <>
                        <div style={{ transform: 'translateY(20px)' }}>
                            <span style={{ fontSize: '35px' }}>
                                <span style={{ fontWeight: '500', display: 'flex', justifyContent: 'center' }}>
                                    <b>
                                        {title}
                                    </b>
                                </span>
                            </span>
                            <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -32px) scale(0.8)' }}>
                                <Button 
                                    color="blue"
                                    onClick={() => {setTitle(''), setTitleClicked(false)}}
                                >
                                    Edit
                                </Button>
                            </span>
                        </div>
                    </>
                    )}
                    <Divider />
                    <TestList deleteQuestion={deleteQuestion} testQuestions={testQuestions} questionNumber={questionNumber} answerNumber={answerNumber} studentAnswer={studentAnswer} setStudentAnswer={setStudentAnswer} score={score} setScore={setScore} total={total} setTotal={setTotal} />
                      {testQuestions.length > 0 ? (
                      <>
                        <h2 style={{ display: 'flex', justifyContent: 'center', transform: 'translateY(-40px)' }}>
                          Delete Question
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', transform: 'translateY(-40px)' }}>
                          <div>
                            <span>
                              <input
                                  type='number'
                                  placeholder='Delete Question #'
                                  style={{ 
                                    padding: '9px 14px 9px 14px', 
                                    fontSize: '14px', 
                                    fontWeight: '400', 
                                    cursor: 'text', 
                                    width: '178.5px', 
                                    borderRadius: '4px', 
                                    border: '1px solid rgba(34, 36, 38, 0.15)' 
                                }}
                                  onChange={(e) => setDeleteQuestion(e.target.value)}
                              />
                            </span>
                            <span>
                              <Button
                                attached="right"
                                color="red"
                                style={{ paddingLeft: '20px' }}
                              >
                                Delete
                              </Button>
                            </span>
                          </div>
                          <div style={{ transform: 'translateY(-.5px)' }}>
                            <Delete setTestQuestions={setTestQuestions} setLetterGrade={setLetterGrade} setFinalGrade={setFinalGrade} setGraded={setGraded} setTotal={setTotal} setScore={setScore} />
                          </div>
                        </div>
                        <div style={{ transform: 'translateY(-20px)' }}>
                          <Divider />
                        </div>
                      </>
                      ): null}
                    <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                        Create New Questions
                    </h2>
                    {newQuestion ? (
                    <>
                        <Button 
                            color="blue"
                            onClick={() => setNewQuestion(false)}
                        >
                            <Icon
                                name="plus"
                            />
                            Add Question
                        </Button>
                    </>
                    ):(
                    <>
                        <div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
                            <Button 
                                disabled={false}
                                color="blue"
                                onClick={handleAddQuestion}
                            >
                                <Icon
                                    name="save"
                                />
                                Save Question
                            </Button>
                            <Button onClick={() => {setNewQuestion(true), setQuestion(''), setAnswer('')}} color="red">
                                <Icon
                                    name="cancel"
                                />
                                Don't Save Question
                            </Button>
                        </div>
                    </>
                    )}
                    <div>
                        {!newQuestion ? (
                        <>
                            <div style={{ paddingBottom: '10px' }}>
                                <h2 style={{ marginBottom: '5px' }}>
                                    Question
                                </h2>
                                <input
                                    ref={questionNameRef}
                                    placeholder="Question"
                                    style={{ 
                                        padding: '9px 14px 9px 14px', 
                                        fontSize: '14px', 
                                        fontWeight: '400', 
                                        cursor: 'text', 
                                        width: '178.5px', 
                                        borderRadius: '4px', 
                                        border: '1px solid rgba(34, 36, 38, 0.15)' 
                                    }}
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                            </div>
                            <div>
                                <h2 style={{ marginBottom: '5px' }}>
                                    Answer
                                </h2>
                                <input 
                                    ref={answerNameRef}
                                    placeholder="Answer"
                                    style={{ 
                                        padding: '9px 14px 9px 14px', 
                                        fontSize: '14px', 
                                        fontWeight: '400', 
                                        cursor: 'text', 
                                        width: '178.5px', 
                                        borderRadius: '4px', 
                                        border: '1px solid rgba(34, 36, 38, 0.15)',
                                        marginBottom: '10px'
                                    }}
                                    onChange={(e) => setAnswer(e.target.value)}
                                />
                            </div>
                        </>
                        ): null}
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '5px' }}>
                            {(finalGrade) ? (
                            <>
                                <Divider />
                                <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                                    Grade Report
                                </h1>
                                Grade: {score}/{total}
                            </>
                            ): null}
                        </h2>
                        <h2>
                            {finalGrade}
                            <span>
                                {(finalGrade) ? (
                                <>
                                    %
                                </>
                                ): null}
                            </span>
                        </h2>
                        <h2 style={{ color: `${color}`, paddingBottom: '30px' }}>
                           {(total > 0) ? (
                           <>
                              {letterGrade}
                           </>
                           ): null}
                        </h2>
                    </div>
                </Container>
            </FocusLock>
        </>
    );
}
