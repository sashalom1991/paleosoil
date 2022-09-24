import { BallTriangle } from 'react-loader-spinner';

export default function Fallback() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BallTriangle
        height="100"
        width="100"
        color="#FF6596"
        ariaLabel="loading"
      />
    </div>
  );
}
