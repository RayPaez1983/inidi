import { render, screen } from "@testing-library/react";
import CategoryItem from "../src/components/category/catergory";

const categories = {
  imageUrl: "images/foto11.jpeg",
  price: 25,
  name: "Bata Yellow",
  id: 1,
};

test("renders learn react link", () => {
  render(<CategoryItem category={categories} />);
  const linkElement = screen.getByText(/Compralo Ahora!/i);
  expect(linkElement).toBeInTheDocument();
});
