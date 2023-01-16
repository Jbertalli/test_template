export default function TestHeader(values) {
  
  const { 
    resize, 
    questionColor, 
    demo 
  } = values;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: resize ? '65px' : '28px',
          lineHeight: resize ? '0px' : '40px',
          marginBottom: resize ? '7vh' : '3vh',
          marginTop: resize ? '4vh' : '-1vh',
          fontFamily: 'sans-serif',
          fontWeight: '300',
          color: `${questionColor}`,
        }}
      >
        Test Generator {demo ? 'Demo' : null}
      </div>
    </>
  );
}
