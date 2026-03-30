import { Button } from './components/Button'

export function MixedList({ children, mixStudents, mixed }) {
  return (
    <section className="col-start-2 row-span-2 bg-surface rounded-xl p-4 overflow-auto flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-brand-secondary font-semibold text-sm uppercase tracking-widest">Mixade par</h2>
        <Button onClick={mixStudents} disabled={mixed?.length > 0} variant="primary" size="sm">
          Mixa
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </section>
  )
}
