export default async function Releases() {
  const test = ["a", "b", "c"] as const;

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {test.map((value, index) => (
          <div key={index}>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
