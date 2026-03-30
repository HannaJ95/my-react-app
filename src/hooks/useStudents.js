import { useState, useEffect, useMemo } from 'react'
import { shuffle } from '../utils/shuffle'

export function useStudents() {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    function toggleDarkMode() {
        setIsDarkMode(prev => {
            document.body.classList.toggle('dark', !prev)
            return !prev
        })
    }



    useEffect(() => {
        setLoading(true)

        fetch('/data/students.json')
            .then(response => response.json())
            .then(json => setStudents(json.students))
            .catch(error => setError("jsonStudents: " + error.message))
            .finally(() => setLoading(false))

        }, [])



  const present = useMemo(() => {
    return students.filter(student => student.isPresent === true)
  }, [students])

  const absent = useMemo(() => {
    return students.filter(student => student.isPresent === false)
  }, [students])

  const mixed = useMemo(() => {
    return students.filter(student => student.groupId !== null)
  }, [students])

  const groups = useMemo(() => {
    return mixed.reduce((acc, student) => {
    const groupId = student.groupId

    if (!acc[groupId]) {
      acc[groupId] = []
    }

    acc[groupId].push(student)
    return acc
  }, {})

  }, [mixed])

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

    function addStudent(name) {
        const parts = name.trim().split(' ')
        const newStudent = {
            id: crypto.randomUUID(),
            firstname: capitalize(parts[0]),
            lastname: capitalize(parts[1]) ?? '',
            isPresent: true,
            groupId: null
        }
        setStudents(prev => [...prev, newStudent])
    }


  return { students, present, absent, groups, loading, error, isDarkMode, addStudent, toggleDarkMode, resetStudents, togglePresent, mixStudents }
}
