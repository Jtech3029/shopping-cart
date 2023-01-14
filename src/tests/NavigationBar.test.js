import React from "react";
import { getByText, render, screen, waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import NavigationBar from "../components/NavigationBar";

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

describe(("Testing Functionality of the Navigation Bar"), () => {

    it("tests if Shop button redirects user to the home/front page", async () => {
        render(<NavigationBar/>);
        const button = screen.getByText("Home");

        userEvent.click(button)

        await waitFor(() => {
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
        });
    
    })

    it("tests if Shop button redirects user to the shopping catalogue", async () => {
        render(<NavigationBar/>);
        const button = screen.getByText("Shop");

        userEvent.click(button)

        await waitFor(() => {
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/shopping-page");
        });
    
    })

    it("tests if Checkout button redirects user to the Checkout section", async () => {
        render(<NavigationBar/>);
        const button = screen.getByText("Checkout");

        userEvent.click(button)

        await waitFor(() => {
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/checkout");
        });
    
    })

    it("displays the current amount of items in the cart", () => {
      render(<NavigationBar itemAmount={69}/>);
      
      expect(screen.getByText("69")).toBeTruthy();
    })

    it("does not display the current amount of items when 0", () => {
      render(<NavigationBar itemAmount={0}/>);
      
      expect(screen.queryByText("0")).not.toBeTruthy();
    })

    it("tests if it is called correct number of times", async () => {
        render(<NavigationBar/>);
        const button1 = screen.getByText("Home");
        const button2 = screen.getByText("Shop");
        const button3 = screen.getByText("Checkout");

        userEvent.click(button1);
        userEvent.click(button2);
        userEvent.click(button3);

    
        await waitFor(() => {
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(3);
        });
    
      })
})