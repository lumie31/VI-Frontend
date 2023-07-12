export interface ContactProp {
  show: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Contact({ show, handleClose }: ContactProp) {
  return (
    <>
      {show ? (
        <div className='contact'>
          <div className='arrow-up'></div>
          <h2>Contact Us</h2>
          <button onClick={handleClose} data-testid='data-testid'>
            Close
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
