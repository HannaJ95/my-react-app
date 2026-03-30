import { useRef, useState } from 'react'
import { Button } from './Button'

export function InputForm({ onAdd }) {
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const name = inputRef.current.value.trim()

    if (!name) {
      setError('Ange ett namn')
      return
    }

    onAdd(name)
    setError('')
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        name="name"
        id="name"
        placeholder="Förnamn Efternamn..."
        className="bg-surface-raised text-slate-100 placeholder-slate-500 rounded-lg px-3 py-1.5 text-sm border border-slate-600 focus:outline-none focus:border-brand"
      />
      <Button type="submit" variant="primary" size="sm">Lägg till</Button>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  )
}
