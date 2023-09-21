import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-secundary">
      <Image
        src="/logo.svg"
        alt="GuruLoja Logo"
        width={350}
        height={24}
        priority
      />
      <div className="items-center justify-center gap-5">
        <h1 className="text-center font-bold text-3xl">Estamos em manutenção!!!</h1>
        <h2 className="text-center font-semibold text-xl">Voltaremos em breve.</h2>
      </div>
    </main>
  )
}
