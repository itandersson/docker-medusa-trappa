interface MainProps {
  children: React.ReactNode
  className?: string
}

export function Main({ children, className }: MainProps) {
  return (
    <main
      className={`min-h-screen w-full bg-gray-50 flex flex-col ${
        className ?? ""
      }`}
    >
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  )
}
