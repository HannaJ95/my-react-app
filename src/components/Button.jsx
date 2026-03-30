/*
  I riktiga projekt samlar man variant- och size-logiken i ett objekt (map).
  På så sätt lägger man bara till en ny rad för att få en ny variant —
  ingen if/else-soppa, och Tailwind-klasserna är lätta att hitta och ändra.
*/

const variants = {
  primary:   'bg-brand hover:bg-brand-hover text-white',
  secondary: 'bg-surface-raised hover:bg-slate-500 text-slate-100',
  danger:    'bg-red-600 hover:bg-red-700 text-white',
  ghost:     'bg-transparent hover:bg-surface-raised text-slate-300 border border-slate-600',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export function Button({ children, onClick, variant = 'primary', size = 'md', disabled = false, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-medium cursor-pointer
        transition-colors duration-150
        disabled:opacity-40 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  )
}
