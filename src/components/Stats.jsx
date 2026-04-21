export default function Stats() {
  const stats = [
    { label: "REPOS", value: "47" },
    { label: "COMMITS / YR", value: "1,284" },
    { label: "PRS MERGED", value: "112" },
    { label: "CUPS OF ☕", value: "∞" },
  ];

  return (
    <section className="bg-[#f5f5f7] px-20 py-20 border-t border-gray-300">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="py-10 border-r last:border-none border-gray-300"
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              {stat.label}
            </p>

            <h3 className="text-5xl font-serif">
              {stat.value}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}