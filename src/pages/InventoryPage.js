class InventoryPage {
    page 
    pageTitle 
    cartIcon 
    addToCartButton 

    constructor(page){
        this.page=page;
        this.pageTitle= page.locator('[data-test="title"]');
        this.cartIcon = page.locator('#shopping_cart_container');
        this.addToCartButton = (productName)=>{
            page.locator('[data-test="add-to-cart-${productName}"]');
        }

    }


    async getTitle(){
        return await this.pageTitle.textContent();
    }

    async  goToCart() {
        await this.cartIcon.click();
    }


    async addToCart(productName) {
        await this.addToCartButton(productName).click();
    }
}
module.exports= InventoryPage;