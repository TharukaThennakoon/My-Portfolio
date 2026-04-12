// Commit 2 - Add hero layout and intro text
export default function Hero() {
  return (
    <section className="pt-40 px-20 min-h-screen flex flex-col justify-between">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-6xl font-serif leading-tight">
            I build software.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Software Engineering undergraduate.
          </p>
        </div>

      </div>

    </section>
  );
}