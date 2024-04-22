import ThemeController from "../ThemeController";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 left-0 p-4 bg-transparent backdrop-blur-[10px]">
        <div>
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
