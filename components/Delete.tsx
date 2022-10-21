import { Button } from 'semantic-ui-react';

export default function Delete({ setTestQuestions }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    color="red"
                    onClick={() => setTestQuestions([])}
                >
                    Delete Question
                </Button>
            </div>
        </>
    );
}
