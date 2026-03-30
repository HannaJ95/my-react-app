export function Person({ firstname, lastname, isPresent, onClickHandler }) {
  const base = 'rounded-lg px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-150 select-none'
  const state = isPresent === null
    ? 'bg-surface-raised hover:bg-slate-500 text-slate-100'
    : isPresent
      ? 'bg-surface-raised hover:bg-slate-500 text-slate-100'
      : 'bg-red-900/60 hover:bg-red-900/80 text-red-200 line-through opacity-70'

  return (
    <article onClick={onClickHandler} className={`${base} ${state}`}>
      <span className="font-semibold">{firstname}</span>{' '}
      <span className="text-slate-400">{lastname}</span>
    </article>
  )
}
