"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral">
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-primary/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-neutral-white px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            日本での理想的な宿泊先を見つけよう
          </h1>
          <div className="w-full max-w-[575px] bg-neutral-white rounded-lg shadow-lg">
            <iframe
              src="/expedia-widget.html"
              width="100%"
              height="300px"
              style={{ 
                border: 'none',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">おすすめの物件</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-neutral-white">
              <div className="h-48 bg-neutral"></div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2 text-primary">物件名</h3>
                <p className="text-primary/70 mb-4">所在地</p>
                <button className="bg-accent hover:bg-accent-light text-neutral-white px-4 py-2 rounded-lg w-full transition-colors">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            日本の民泊ガイド
          </h2>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-primary/80">
              民泊で本物の日本を体験しましょう。
              京都の伝統的な町家から東京のモダンなアパートメントまで、
              あなたの日本での冒険に最適な宿泊先が見つかります。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}