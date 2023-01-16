import { Icon } from 'semantic-ui-react';

export default function Logo() {
  return (
    <>
      <div
        style={{
          width: '200px',
          height: '200px',
          background: '#125CA1',
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px',
        }}
      >
        <Icon
          name="check"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'scale(8.7)',
          }}
        />
      </div>
      <div
        style={{
          background: 'white',
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px',
          transform: 'translate(-90px, 100px)',
        }}
      >
        <Icon
          name="check"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'scale(14.0)',
            color: '#125CA1',
          }}
        />
      </div>
    </>
  );
}
