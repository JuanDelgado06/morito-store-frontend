import { Vue, Component, Prop } from 'vue-property-decorator'

interface Product {
    _id: number,
    category?: string,
    owner?: string,
    title: string,
    description: string,
    photo_products?: Array<object>,
    price: number,
    stockQuantity: number,
    rating?: Array<number>
}

@Component
export default class CardProduct  extends Vue {
    @Prop({type: Object, required: false}) product!: Product
    //Data
        rating1 :number = 4;
        confirmDelete : boolean = false;
    //Methods
        updateProduct() : void {
            this.$router.push(`/product/${this.product._id}`)
        }
        async deleteProduct() {
            // console.log( `ID => ${this.product._id}`);
            let loading = this.$loading({
                text: 'Eliminando',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            try {
                let productID: number = this.product._id
                await this.$confirm(`Estas seguro de eliminar el producto : ${this.product.title}`, 'Atencion', {
                    type: 'warning',
                    center: true
                })
                    .then(_ => this.confirmDelete = true)
                    .catch(_ =>  {
                        this.confirmDelete = this.confirmDelete;
                        loading.close();
                    });
                if(this.confirmDelete) {
                    await this.$axios.$delete(`/api/products/${productID}`)
                    loading.close();
                    this.$notify({
                        title: 'Eliminado',
                        message: 'Producto eliminado con exito',
                        type: 'success'
                    })
                }
            } catch (e) {
                // (message, config, code, request, response) opciones para capturar el mensaje de error
                let res = e.response.data.message;
                loading.close();
                this.$notify({
                    title: 'Error',
                    message: res,
                    type: 'error'
                })
            }
        }
}