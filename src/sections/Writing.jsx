export default function Writing() {
  return (
    <section id="writing" className="px-20 py-32">
      <h2 className="text-5xl font-serif mb-10">
        Writing about what I'm <span className="text-purple-500 italic">figuring out</span>.
      </h2>

      <div className="grid grid-cols-3 gap-10">
        <div className="border p-6">
          <h3 className="text-xl">AES-256 from scratch</h3>
          <p className="text-gray-400 mt-2">
            What I learned building encryption manually.
          </p>
        </div>
      </div>
    </section>
  );
}