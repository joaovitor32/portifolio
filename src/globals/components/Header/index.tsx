export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold font-sans">
        <span className="text-blue-400">JVM</span>Tech
      </div>

      {/* Navegação */}
      <nav className="space-x-6 text-gray-700 font-sans">
        <a
          href="#inicio"
          className="text-gray-700 hover:text-blue-400 active:text-blue-500 transition-colors"
        >
          Início
        </a>
        <a
          href="#timeline"
          className="text-gray-700 hover:text-blue-400 active:text-blue-500 transition-colors"
        >
          Timeline
        </a>
        <a
          href="#sobre"
          className="text-gray-700 hover:text-blue-400 active:text-blue-500 transition-colors"
        >
          Sobre mim
        </a>
        <a
          href="#projetos"
          className="text-gray-700 hover:text-blue-400 active:text-blue-500 transition-colors"
        >
          Projetos
        </a>
      </nav>
    </header>
  )
}
