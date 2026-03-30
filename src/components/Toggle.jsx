export function Toggle({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center cursor-pointer gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="relative w-9 h-5 bg-slate-400 dark:bg-slate-600 rounded-full peer
        peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand
        peer-checked:bg-brand
        after:content-[''] after:absolute after:top-[2px] after:start-[2px]
        after:bg-white after:rounded-full after:h-4 after:w-4
        after:transition-all
        peer-checked:after:translate-x-full"
      />
      {label && <span className="text-sm font-medium text-slate-700 dark:text-slate-300 select-none">{label}</span>}
    </label>
  )
}
