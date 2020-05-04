import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ProductFormMixin extends Vue {
    title: string = '';
    description: string = '';
    price: number = 1;
    stockQuantity: number = 1;
    category: string = '';
    owner: string = '';
    photo_products: any = [];
    selectFile: any = null;
    dialogImageUrl: string = '';
    dialogVisible: boolean = false;
}