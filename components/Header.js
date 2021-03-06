import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4  py-2 shadow-md bg-white ">
      <Button
        color="lightBlue"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" />
      </Button>
      <Icon name="description " size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
      <div className="mx-5 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search " size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="sm:w-20 flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2 "
        src="https://lh3.googleusercontent.com/ogw/ADea4I5WKnIfwYIzj2oCaKvpHDZf727P2Z93SV1G2CGt=s32-c-mo"
      />
    </div>
  );
}

export default Header;
