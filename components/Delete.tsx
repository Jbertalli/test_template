import { Button, Icon } from 'semantic-ui-react';

export default function Delete({ setTestQuestions, setLetterGrade, setFinalGrade, setGraded, setTotal, setScore }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    color="red"
                    onClick={() => {setTestQuestions([]), setLetterGrade(null), setFinalGrade(0), setGraded(false), setTotal(0), setScore(0)}}
                >
                    <Icon
                        name="cancel"
                    />
                    Delete All Questions
                </Button>
            </div>
        </>
    );
}
