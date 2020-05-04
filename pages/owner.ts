import { Vue, Component } from 'nuxt-property-decorator'

    @Component
    export default class Owner extends Vue {
    //AsyncData
        public async asyncData({$axios} : any) {
            try {
                const {data} = await $axios.$get('owners');
                return { owners : data }
            } catch (e) {
                console.log(e);
            }
        }
    //Data
        name: string = '';
        about: string = '';
        photo: any = [];
        dialogImageUrl: string = '';
        dialogVisible: boolean = false;
    //Methods
        onFileSelected(res: any, file: object | any) {
            this.photo = file.raw;//URL.createObjectURL
        }
        async addOwner() : Promise<void> {
            try {
                let data = new FormData();
                data.append("name", this.name);
                data.append("about", this.about);
                data.append("photo", this.photo);

                await this.$axios.$post('owners', data);
                this.$router.push('/');
            } catch (e) {
                console.log(e);
            }
        }
        //Metodos para el-upload
        handleExceed(files : [], fileList: Array<object>) {
            this.$message.warning(`El limite es de 1 imagen`);
        }
        handleRemove(file : string, fileList: string[]) : void {
            console.log(file, fileList);
        }
        handlePictureCardPreview(file : string | any) : any {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }