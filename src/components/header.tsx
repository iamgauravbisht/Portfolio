function header() {
  return (
    <header className="bg-black flex flex-col space-y-2 items-center text-white p-2">
      <h1 className="text-xl whitespace-nowrap">Gaurav Bisht</h1>

      <ul className="flex border rounded-xl border-white">
        <li className="mx-2 ">Home</li>
        <li className="mx-2">About</li>
        <li className="mx-2">Projects</li>
        <li className="mx-2">Contact</li>
      </ul>
    </header>
  );
}

export default header;
