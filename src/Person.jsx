export function Person({ firstname, lastname, isPresent, onClickHandler }) {
  return (
    <article
      onClick={onClickHandler}
      className={isPresent ? "present" : "not-present"} 
    >
      <h2>{firstname} <span> {lastname} </span> </h2>
    </article>
  );
}