export default function Home({ users }) {
  return (
    <section className="w-full h-max text-center border text-black py-3">
      <article className="text-5xl font-extrabold">
        Welcome to User List!
      </article>
      <section className="flex flex-col items-center">
        {users.map((user, i) => (
          <ul className="my-5 border p-5 border-yellow-700 w-64" key={i}>
            <li className="text-lg font-bold">{user.userName}</li>
          </ul>
        ))}
      </section>
    </section>
  );
}
