import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const testArticle = {
  id: "aMqwd",
  headline: "headline",
  createdOn: "2021-08-09T18:02:38-04:00 ",
  summary: "summary",
  body: "",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
  screen.debug();
});

test("renders headline, author from the article when passed in through props", async () => {
  //   render(<Article article={4} />);
  //   const headline = await screen.findByTestId("headline");
  //   expect(headline).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {});

test("executes handleDelete when the delete button is pressed", () => {});

//Task List:
//1. Complete all above tests. Create test article data when needed.
