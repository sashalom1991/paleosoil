import Excavate from '../../assets/img/excavate.gif';

export default function Fallback() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30px',
      }}
    >
      <img src={Excavate} alt="Loading....." />
    </div>
  );
}
