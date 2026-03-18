import './App.css'
import { useState, useEffect } from 'react'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { shuffle } from './utils/shuffle'




function App() {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch('./src/data/students.json')
        .then(response => response.json())
        .then(json => setStudents(json.students))
        .catch(error => setError("jsonStudents: " + error.message))
        .finally(() => setLoading(false))

    }, [])

  const present = students.filter(student => student.isPresent === true)
  const absent = students.filter(student => student.isPresent === false)
  const mixed = students.filter(student => student.groupId !== null)
  const groups = mixed.reduce((acc, student) => {
    const groupId = student.groupId

    if (!acc[groupId]) {
      acc[groupId] = []
    }

    acc[groupId].push(student)
    return acc
  }, {})

  function resetStudents () {
    setStudents(students?.map(student => ({...student, isPresent: true, groupId: null})))
  }

  function togglePresent(id) {
    setStudents(students?.map(student => {
      if (student.id === id) {
        return { ...student, isPresent: !student.isPresent }
      }
      return student
    }))
  }

  function setGroupId (students) {
    return students?.map((student, i) => {
      if (students.length % 2 != 0 && i >= students.length-3) {
        return {...student, groupId: Math.floor((students.length - 3) / 2) + 1 }
      }
      return {...student, groupId: Math.floor(i / 2) + 1 }
    })
  }

  function mixStudents(array) {

    const shuffled = shuffle([...present])
    console.log("Shuffled: " + shuffled)
    console.log(shuffled)

    const groupedStudents = setGroupId(shuffled)
    console.log("Grouped: " + groupedStudents);
    console.log(groupedStudents);

    setStudents([...groupedStudents?.map(s => ({...s, isPresent: null})), ...absent])

  }


  return (
    <>
      <button onClick={resetStudents}>RESET</button>
      
      <section className="layout">

        <StudentList>
          {
          present?.map(student => (
            <Person 
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))
          }
        </StudentList>

        <NotPresentList>
          {
          absent?.map(student => (
            <Person 
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))
          }
        </NotPresentList>

        <MixedList mixStudents={mixStudents} mixed={mixed}>
          {Object.values(groups).map((group, i) => (
            <div key={i} className="flex gap-2 border-2 border-white rounded-lg p-2 mb-2">

              {group.map(student => (
                <Person key={student.id} {...student} />
              ))}
            </div>
          ))}
        </MixedList>

      </section>
    </>
  )
}

export default App