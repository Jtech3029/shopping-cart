import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import Product from "../components/Product";


describe(("Testing Functionality of the products"), () => {
    it("tests if it adds to the cart", async () => {
        const addToCart = jest.fn();
        render(<Product productName="Ryzen 5 5600g" productPrice={129.99} addToCart={addToCart}/>);
        userEvent.click(screen.getByText("Add to cart"));

        await waitFor(() => {expect(addToCart).toHaveBeenCalledWith(["Ryzen 5 5600g", 129.99, 1])})
    })

})