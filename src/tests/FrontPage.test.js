import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import FrontPage from "../components/FrontPage";

const mockedUsedNavigate = jest.fn(useNavigate);

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
  
    //Mock the use navigate function
    return {
      __esModule: true,
      ...originalModule,
      useNavigate: () => mockedUsedNavigate,
    };
  });

describe(("Testing Functionality of the Front Page"), () => {

  it("tests if it is called correct number of times", async () => {
    render(<FrontPage/>);
    const button = screen.getByText("SHOP NOW");

    userEvent.click(button)

    await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });

  })

  it("tests if Shop Now button redirects user to the shopping catalogue", async () => {
    render(<FrontPage/>);
    const button = screen.getByText("SHOP NOW");

    userEvent.click(button)

    await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/shopping-page");
    });
    
  })

})