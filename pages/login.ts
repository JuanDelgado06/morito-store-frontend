import { Vue, Component } from 'nuxt-property-decorator'

@Component({
    middleware: "auth",
})
export default class Login extends Vue {
    //Data
    email: string = '';
    password: string = '';
    //Methods
    async login() {
        try {
            // console.log(res);
            await this.$auth.loginWith("local", { 
                data: {
                    email: this.email,
                    password: this.password
                } 
            })

            this.$router.push("/");
        } catch (e) {
            console.log(e);
        }
    }
}