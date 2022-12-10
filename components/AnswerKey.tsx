export default function AnswerKey({ fruits1 }) {

    console.log(fruits1);

    return (
        <>
            <div
                style={{
                    color: 'red'
                }}
            >
                {fruits1 && fruits1.length > 0 ? (
                <>
                    <h1
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        Answer Key
                    </h1>
                </>
                ): null}
                {
                    fruits1 && fruits1.map((element, index) => 
                        <h3>
                            {index + 1}. {element}
                        </h3>
                    )
                }
            </div>
        </>
    )
}
