// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen p-0 flex flex-col justify-center items-center text-center">
      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 text-6xl leading-tight text-blue-600">私の最初のVercelアプリケーション</h1>
        <p className="text-2xl leading-normal">これはVercelにデプロイされたシンプルなNextアプリケーションです。</p>
      </main>
    </div>
  );
}
