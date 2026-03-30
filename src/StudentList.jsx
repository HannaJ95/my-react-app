export function StudentList({ children }) {
  return (
    <section className="col-start-1 row-start-1 bg-surface rounded-xl p-4 overflow-auto flex flex-col gap-3">
      <h2 className="text-brand font-semibold text-sm uppercase tracking-widest">Närvarande</h2>
      <div className="flex flex-wrap gap-2 content-start">
        {children}
      </div>
    </section>
  )
}
