import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    selectedCategory: string | undefined;
    
    productsPerPage = 4;
    selectedPage = 1;

    constructor(private repository: ProductRepository) {

    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

}