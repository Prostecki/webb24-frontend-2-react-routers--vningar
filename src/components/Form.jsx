export default function Form() {
  return (
    <form
      action=""
      className="flex flex-col items-center my-10 gap-5 border p-5"
    >
      <label htmlFor="">Name</label>
      <input
        className="w-[300px] p-1 rounded-sm border"
        placeholder="Name..."
        type="text"
      />
      <button className="border p-1 w-36 bg-slate-500 text-white rounded-sm shadow-xl btn-hover duration-500">
        Add user
      </button>
    </form>
  );
}
