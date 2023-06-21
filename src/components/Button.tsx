interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const VARIANTS: { [key: string]: string } = {
  inverse:
    'bg-white text-black hover:bg-slate-300 focus-visible:outline-slate-500',
  primary:
    'bg-black text-white hover:bg-slate-500 focus-visible:outline-slate-600',
};

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`px-2.5 py-1.5 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
