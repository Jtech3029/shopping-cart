import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FrontPage from "./FrontPage";

describe(("poop"), () => {
    test("poop is bad", () => {
        const { getByRole } = render(<FrontPage />);
        expect(getByRole("button").textContent).toMatch("asd");
    })
})