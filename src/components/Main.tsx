export interface MainProp {
  handleShow: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Main({ handleShow }: MainProp) {
  return (
    <>
      <main>
        <div className='child cta'>
          <h3>A Wonderful serenity has taken possesio</h3>
          <p>
            A Wonderful serenity has taken possesion of my entire soul, like
            these sweet mo
          </p>
          <button onClick={handleShow} data-testid='data-testid'>
            Link button
          </button>
        </div>
        <div className='child img'></div>
      </main>
    </>
  );
}
