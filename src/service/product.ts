import axios from "axios";

class Application{
    #app = axios.create({baseURL:"https://fakestoreapi.com"});

    async getAllProducts(){
        const result = await this.#app.get("products");
        return result.data;
    }

    async getProductByID(ID:string){
        const result = await this.#app.get(`products/${ID}`);
        return result.data;
    }

    async getProductLimitResult(lim:number){
        const result = await this.#app.get(`products?limit=${lim}`);
        return result.data;
    }

    async getAllCategories(){}

    async getProductsByCateGory(){}

    async addNewProduct(){}

    async updateProduct(){}

    async deleteProduct(){}
    
}

export default {Application: new Application()}