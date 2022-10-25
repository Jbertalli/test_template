import { Button } from 'semantic-ui-react';

export default function Delete({ setTestQuestions, setLetterGrade }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    color="red"
                    onClick={() => {setTestQuestions([]), setLetterGrade('')}}
                >
                    Delete All Questions
                </Button>
            </div>
        </>
    );
}
