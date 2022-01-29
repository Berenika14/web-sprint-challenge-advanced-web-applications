import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const testArticle = {
  id: "aMqwd",
  headline: "headline",
  author: "Suzan Young",
  createdOn: "2021-08-09T18:02:38-04:00 ",
  summary: "summary",
  body: "",
};
const testArticleWithoutAuthor = {
  id: "aMqwd",
  headline: "headline",
  createdOn: "2021-08-09T18:02:38-04:00 ",
  summary: "summary",
  body: "",
};

test("renders component without errors", () => {
  const handleDelete = jest.fn();
  const handleEditSelect = jest.fn();
  render(
    <Article
      article={testArticle}
      handleEditSelect={handleEditSelect}
      handleDelete={handleDelete}
    />
  );
});

test("renders headline, author from the article when passed in through props", () => {
  const handleDelete = jest.fn();
  const handleEditSelect = jest.fn();
  render(
    <Article
      article={testArticle}
      handleEditSelect={handleEditSelect}
      handleDelete={handleDelete}
    />
  );

  const headline = screen.queryByTestId(/headline/i);
  const author = screen.queryByTestId(/author/i);

  expect(headline).toContainHTML("headline");
  expect(author).toContainHTML("Suzan Young");
});

test('renders "Associated Press" when no author is given', () => {
  const handleDelete = jest.fn();
  const handleEditSelect = jest.fn();
  render(
    <Article
      article={testArticleWithoutAuthor}
      handleEditSelect={handleEditSelect}
      handleDelete={handleDelete}
    />
  );

  const author = screen.queryByTestId(/author/i);
  expect(author).toContainHTML("By Associated Press");
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDelete} />);

  const deleteButton = screen.queryByTestId(/deleteButton/i);
  userEvent.click(deleteButton);
  expect(handleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
