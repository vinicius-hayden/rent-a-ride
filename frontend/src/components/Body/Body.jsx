import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import Search from "../Search/Search";

export default function Body() {
  return (
    <>
      <div className="body">
        <Search />
        <Categories />
        <Products />
      </div>
    </>
  );
}
