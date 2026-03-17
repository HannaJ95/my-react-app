import styled from "@emotion/styled"

/* styling-sätt: Emotion/Styled Components (CSS-in-JS)  */

const Wrapper = styled.section`
  grid-column: 2;
  grid-row: 1 / span 2;
  overflow: auto;
  background-color: hotpink;   /* ändrad färg för att testa */
  border-radius: 1rem;
`

const Title = styled.h1`
  font-size: x-small;
`

const SubTitle = styled(Title)`
  font-style: italic;
  color: orange;
`

const Children = styled.div`
border: 1px solid black;
`

export function MixedList({ children, mixStudents, mixed }) {
  return (
    <Wrapper>
      <button onClick={mixStudents} disabled={mixed.length > 0}>
        MIXA
      </button>
      <Title>Mixade par</Title>
      <SubTitle>oki</SubTitle>
      <Children>
        {children}
      </Children>
    </Wrapper>
  );
}