import removeFromCart from "../removeFromCart"


describe("tests addItemToCart function", () => {
    it("filters out items with different names and adds same items together", () => {
        let cart = [["ryry", 69.68, 1],["ryury", 69.68, 1]];
        const setCart = (x) => cart = x;
        let itemAmount = 0;
        const setItemAmount = (x) => itemAmount = x;
        let testItem = ["ryry", 69.68, 1];
        let testItem2 = ["ryury", 69.68, 1];
        expect(cart.length).toBe(2);
        removeFromCart(cart, setCart, testItem, setItemAmount, itemAmount);
        expect(cart.length).toBe(1);
        removeFromCart(cart, setCart, testItem2, setItemAmount, itemAmount);
        expect(cart.length).toBe(0);

    })
})