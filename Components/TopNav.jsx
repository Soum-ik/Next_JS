import Link from "next/link"; 

const Navbar = () => {
  return (
    <div
      className={`sm:px-16 px-6 flex justify-center items-center mt-2 text-[20px] bg-black/10 p-2 rounded-md`}
    >
      <div className={`xl:max-w-[1280px] w-full`}>
        <nav className="  flex items-center justify-between  ">
          <h1>Hello World</h1>

          <div className=" space-x-5">
            <Link href="/login">Log In </Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
