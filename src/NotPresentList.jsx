export function NotPresentList({ children }) {
  const myStyles = {gridColumn: 1, gridRow: 2,        overflow: "auto", backgroundColor: "blue"}
  return (
    <section className="notPresentList" style={myStyles}>
      <h1>Frånvarande</h1>
      <div>
        {children}
      </div>
    </section>
  );
}