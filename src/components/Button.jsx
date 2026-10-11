
function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold transition duration-200'

  const variants = {
    primary:
      'bg-amber-400 text-slate-950 hover:bg-amber-300',
    secondary:
      'border border-white/20 text-white hover:bg-white/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] ?? variants.primary}`}
    >
      {children}
    </button>
  )
}

export default Button