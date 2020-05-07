import Product from '@/components/CardProduct.vue';
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {
    Product
  }
})
export default class Index extends Vue {
  //asyncData obtendra los datos antes de que nuxt rendirece la pagina
  async asyncData({ $axios } : any) {
    try {
      const  { data } = await $axios.$get("/api/products");
      return { products: data }
    } catch (err) {
      console.log(err);
    }
  }
}