import './App.css'
import { useStudents } from './hooks/useStudents'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { Button } from './components/Button'
import { Toggle } from './components/Toggle'
import { InputForm } from './components/InputForm'

function App() {
  const { present, absent, mixed, groups, resetStudents, togglePresent, mixStudents, toggleDarkMode, isDarkMode, addStudent } = useStudents()

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-surface-muted dark:text-slate-100 p-6 flex flex-col gap-6">

      <header className="flex flex-wrap items-center gap-3">
        <Button onClick={resetStudents} variant="secondary" size="sm">Reset</Button>
        <InputForm onAdd={addStudent} />
        <Toggle checked={isDarkMode} onChange={toggleDarkMode} label="Dark mode" />
      </header>

      <section className="grid grid-cols-[2fr_1fr] grid-rows-[1fr_auto] gap-4 flex-1 min-h-0" style={{ height: '80vh' }}>
        <StudentList>
          {present?.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))}
        </StudentList>

        <NotPresentList>
          {absent?.map(student => (
            <Person
              key={student.id}
              {...student}
              onClickHandler={() => togglePresent(student.id)}
            />
          ))}
        </NotPresentList>

        <MixedList mixStudents={mixStudents} mixed={mixed}>
          {Object.values(groups).map((group, i) => (
            <div key={i} className="flex flex-wrap gap-2 bg-surface-raised rounded-lg p-2">
              {group.map(student => (
                <Person key={student.id} {...student} />
              ))}
            </div>
          ))}
        </MixedList>
      </section>

    </div>
  )
}

export default App
