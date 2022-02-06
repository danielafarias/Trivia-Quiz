import { useState, useEffect } from "react";
import { MenuContainer } from "./style";
import { getCategories } from "../../api";

export function Menu(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.trivia_categories);
    });
  }, []);

  return (
    <MenuContainer display={props.display}>
      {categories.map((category) => (
        <a href={`/category?id=${category.id}`}>
          <div className="menu-category">
              <p>{category.name}</p>
          </div>
        </a>
      ))}
    </MenuContainer>
  );
}
