import dataFormMixins from '@/mixins/product-form-mixin'
import { Component, mixins } from 'nuxt-property-decorator'

    @Component
    export default class Product extends mixins(dataFormMixins) {
    //asyncData
        async asyncData({$axios} : any) {
            try {
                const categoriesPromise : Promise<object> = $axios.$get('categories');
                const ownersPromise : Promise<object> = $axios.$get('owners');

                const promises: Array<object | any> = [categoriesPromise, ownersPromise];
                //Utilizamos Promise.all porque necesitamos que las dos promesas se ejecuten al mismo tiempo
                const [catResponse, ownerResponse] = await Promise.all(promises);

                return {
                    categories: catResponse.data,
                    owners: ownerResponse.data
                }
            } catch (e) {
                throw new Error(e)
            }
        }
    //Methods
        async addProduct() {
            try {
                let data : any = new FormData();
                data.append("title" , this.title);
                data.append("description" , this.description);
                data.append("price" , this.price);
                data.append("stockQuantity", this.stockQuantity);
                data.append("category" , this.category);
                data.append("owner" , this.owner);
                //Para subir un solo archivo archivo
                    //data.append("photo_products" , this.selectFile);
                //Para subir multiples archivos utilizamos forEach
                this.photo_products.forEach((image : any, key : number) => {
                    data.append("photo_products", image)
                })

                const result = await this.$axios.$post('products', data)
                this.$router.push('/');
            } catch (e) {
                console.log(e);
            }
        }
    }