import { useState, memo } from 'react'


const StudentCard = memo(function StudentCard({ name }) {
    console.log(`StudentCard rendered: ${name}`)
    return <div className="card">{name}</div>
})

// This component is NOT memoized — always re-renders
function Counter({ count, onClick }) {
    console.log(`Counter rendered ${count}`)
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}

export function MemoExample() {
    const [count, setCount] = useState(0)
    const [students] = useState(["Rune", "Wolfram", "Celia"])

    return (
        <div>
            <Counter 
                count={count} 
                onClick={() => setCount(c => c + 1)} 
            />
            <div>
                {students.map(name => (
                    <StudentCard key={name} name={name} />
                ))}
            </div>
        </div>
    )
}