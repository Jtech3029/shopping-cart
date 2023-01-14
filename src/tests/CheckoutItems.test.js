import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import CheckoutItems from "../components/CheckoutItems";


describe(("Testing Functionality of the checkout items"), () => {
    it("tests if it adds to the cart", async () => { 
        const addToCart = jest.fn();
        render(<CheckoutItems productName="Ryzen 5 5600g" productPrice={129.99} addToCart={addToCart}/>);
        userEvent.click(screen.getByText("+"));

        await waitFor(() => {expect(addToCart).toHaveBeenCalledWith(["Ryzen 5 5600g", 129.99, 1])})
    })

    it("tests if it removes from the cart", async () => { 
        const removeFromCart = jest.fn();
        render(<CheckoutItems productName="Ryzen 5 5600g" productPrice={129.99} removeFromCart={removeFromCart}/>);
        userEvent.click(screen.getByText("-"));

        await waitFor(() => {expect(removeFromCart).toHaveBeenCalledWith(["Ryzen 5 5600g", 129.99, 1])})
    })
})