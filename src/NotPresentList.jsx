export function NotPresentList({ children }) {
  return (
    <section className="col-start-1 row-start-2 bg-surface rounded-xl p-4 overflow-auto flex flex-col gap-3">
      <h2 className="text-red-400 font-semibold text-sm uppercase tracking-widest">Frånvarande</h2>
      <div className="flex flex-wrap gap-2 content-start">
        {children}
      </div>
    </section>
  )
}
