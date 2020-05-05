import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ProductFormMixin extends Vue {
    // Data
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
    //Methods
    onFileSelected(res: any, file: object | any) {
        this.selectFile = file.raw;//URL.createObjectURL
        console.log(file.raw);
        this.photo_products.push(file.raw)
    }
    handleExceed(files : [], fileList: Array<object>) {
        this.$message.warning(`El limite es 3 images, haz seleccionado ${files.length} archivos, añade hasta ${(files.length + fileList.length) - 1} images`);
    }
    handleRemove(file : string, fileList: string[]) : void {
        console.log(file, fileList);
    }
    handlePictureCardPreview(file : string | any) : any {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }
}