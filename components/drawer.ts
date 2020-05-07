import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Drawer extends Vue {
    //@Prop({type: Object, required: false}) readonly product!: Product
    show: boolean = false;
    // computed
    public get user(): object {
        return this.$auth.user
    }
    //Methods
    open(): boolean {
        return this.show = true;
    }
    close(): boolean {
        return this.show = false;
    }
    async logout() {
        await this.$auth.logout();
    }
}