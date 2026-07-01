class InventoryPage {
    page 
    pageTitle 
    cartIcon 
    addToCartButton 
    cartCount

    constructor(page){
        this.page=page;
        this.pageTitle= page.locator('[data-test="title"]');
        this.cartIcon = page.locator('#shopping_cart_container');
        this.addToCartButton = (productName)=> page.locator(`[data-test="add-to-cart-${productName}"]`); // if you give currly bracess for this function then we have to explicitly give return keyword while using it
        this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
    }


    async getTitle(){
        return await this.pageTitle.textContent(); //testcontent always return string only
    }

    async  goToCart() {
        await this.cartIcon.click();
    }


    async addToCart(productName) {
        await this.addToCartButton(productName).click();
    }

    async getCartCount(){
        return await this.cartCount.textContent();

    }
}
module.exports= InventoryPage;