import ThemeController from "../ThemeController";

const Navbar = () => {
  return (
    <>
      <nav className="sticky w-full top-0 left-0 z-[999] px-6 py-4 bg-transparent shadow backdrop-blur-[10px]">
        <div className="flex items-center justify-between">
          <h1>Logo</h1>
          <div>
            <ThemeController />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
