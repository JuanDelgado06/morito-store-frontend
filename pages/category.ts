import { Vue, Component } from 'nuxt-property-decorator'
    @Component
    export default class Category extends Vue {
    //asyncData
        async asyncData({$axios} : any) {
            try {
                const {data} = await $axios.$get('categories');
                return { categories : data }
            } catch (e) {
                throw new Error(`Ojito Error => ${e}`)
                console.log(e);
            }
        }
    //Data
        type: string = '';
    //Methods
        async addCategory() {
            try {
                let tipoM: any = this.type.toUpperCase().substring(0, 1);
                let tipoL: any = this.type.substring(1);
                let tipo: string = `${tipoM}${tipoL}`;

                const data = {type : tipo}
                const result = await this.$axios.$post('categories', data);
                this.$router.push('/category')
            } catch (e) {
                let message: string = e.message;
                if (message.indexOf('409')  === 32) {
                    console.log('Valor duplicado');
                    this.$notify({
                        title: 'Duplicado',
                        message: 'La  categoria que ingreso ya existe',
                        type: 'warning'
                    })
                } else {
                    console.log(e);
                }
            }
        }
        cancelHome():void {
            this.$router.push('/')
        }
    }