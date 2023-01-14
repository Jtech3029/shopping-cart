import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import Checkout from "../components/Checkout";
import useNavigate from "react-router-dom";

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

describe(("Testing Functionality of the checkout items"), () => {
    it("renders every element within the cart",() => {
        const cart = [["Ryzen poopinator", 59.89, 15],["super duper inator", 56, 1],["sugma lol", 55, 3],["poop", 51, 2]];
        render(<Checkout cart={cart} />);
        expect(screen.getByText("Ryzen poopinator")).toBeTruthy();
        expect(screen.getByText("super duper inator")).toBeTruthy();
        expect(screen.getByText("sugma lol")).toBeTruthy();
        expect(screen.getByText("poop")).toBeTruthy();

    })

    it("renders no elements within the cart if cart is empty",() => {
        const cart = [];
        render(<Checkout cart={cart} />);
        expect(screen.queryByText("Ryzen poopinator")).not.toBeTruthy();
        expect(screen.queryByText("super duper inator")).not.toBeTruthy();
        expect(screen.queryByText("sugma lol")).not.toBeTruthy();
        expect(screen.queryByText("poop")).not.toBeTruthy();
        expect(screen.queryByText("Complete Order")).not.toBeTruthy();
        expect(screen.getByText("Your cart is empty")).toBeTruthy();
    })
})