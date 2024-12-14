import { signOut } from "../../utils/auth";

const Header = () => {
  return (
    <div className="w-full h-16 px-4 shadow-md bg-indigo-50 text-indigo-800 flex items-center">
      <div className="pt-5 text-lg font-semibold text-center flex-grow">TARGET WITH SK SIR</div>
      <div onClick={() => signOut()}>Logout</div>
    </div>
  );
};

export default Header;
