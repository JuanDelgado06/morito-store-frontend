import dataFormMixins from '@/mixins/product-form-mixin'
import { Component, mixins } from 'nuxt-property-decorator'

    @Component
    export default class Product extends mixins(dataFormMixins) {
    //asyncData
        async asyncData({$axios, params} : any) {
            try {
                const categoriesPromise : Promise<object> = $axios.$get('/api/categories');
                const ownersPromise : Promise<object> = $axios.$get('/api/owners');
                const productPromise : Promise<object> = $axios.$get(`/api/products/${params.id}`);

                const promises: Array<object | any> = [categoriesPromise, ownersPromise, productPromise];
                //Utilizamos Promise.all porque necesitamos que las dos promesas se ejecuten al mismo tiempo
                const [catResponse, ownerResponse, productResponse] = await Promise.all(promises);
                return {
                    categories: catResponse.data,
                    owners: ownerResponse.data,
                    product: productResponse.data
                }
            } catch (e) {
                console.log(e);
            }
        }
        created() {
            this.defaultProduct();
        }
        //Data
        product: any = '';
        //Methods
        defaultProduct() : void {
            this.title = this.product.title;
            this.description = this.product.description;
            this.price = this.product.price;
            this.stockQuantity = this.product.stockQuantity;
            this.category = this.product.category;
            this.owner = this.product.owner;
        }
        async updateProduct() {
            try {
                let data: any;
                if(this.photo_products.length > 0) {
                    data = new FormData();
                        data.append("title" , this.title);
                        data.append("description" , this.description);
                        data.append("price" , this.price);
                        data.append("stockQuantity", this.stockQuantity);
                        data.append("category" , this.category);
                        data.append("owner" , this.owner);
                        this.photo_products.forEach((image : any, key : number) => {
                            data.append("photo_products", image)
                        })
                } else {
                    data = {
                        title : this.title,
                        description : this.description,
                        price : this.price,
                        stockQuantity : this.stockQuantity,
                        category : this.category,
                        owner : this.owner
                    }
                }
                await this.$axios.$put(`/api/products/${this.$route.params.id}`, data)
                this.$router.push('/');
            } catch (e) {
                console.log(e);
            }
        }
    }