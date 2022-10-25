import { Button } from 'semantic-ui-react';

export default function Delete({ setTestQuestions, setLetterGrade, setFinalGrade, setGraded }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    color="red"
                    onClick={() => {setTestQuestions([]), setLetterGrade(''), setFinalGrade(''), setGraded(false)}}
                >
                    Delete All Questions
                </Button>
            </div>
        </>
    );
}
