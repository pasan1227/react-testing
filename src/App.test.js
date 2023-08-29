import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 3 list items", () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  expect(listitems).toHaveLength(3);
});

test("renders header", () => {
  render(<App />);
  const header = screen.getByTestId("mytestid");
  expect(header).toBeInTheDocument();
});

test("sum should be 6", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("6");
});
