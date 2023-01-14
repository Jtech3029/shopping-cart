import addItemToCart from "../addItemToCart"


describe("tests addItemToCart function", () => {
    it("filters out items with different names and adds same items together", () => {
        let cart = [];
        const setCart = (x) => cart = x;
        let itemAmount = 0;
        const setItemAmount = (x) => itemAmount = x;
        let testItem = ["ryry", 69.68, 1];
        let testItem2 = ["ryury", 69.68, 1];
        expect(cart.length).toBe(0);
        addItemToCart(cart, setCart, testItem, setItemAmount, itemAmount);
        expect(cart.length).toBe(1);
        addItemToCart(cart, setCart, testItem2, setItemAmount, itemAmount);
        expect(cart.length).toBe(2);
        addItemToCart(cart, setCart, testItem, setItemAmount, itemAmount);
        expect(cart.length).toBe(2);
    })
})