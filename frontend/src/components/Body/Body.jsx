import Categories from "../Categories/Categories";
import Search from "../Search/Search";

export default function Body() {
  return (
    <>
      <div className="body">
        <Search />
        <Categories />
      </div>
    </>
  );
}
