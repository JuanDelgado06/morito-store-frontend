import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class SignUp extends Vue {
    //Data
    name: string = '';
    email: string = '';
    password: string = '';
    //Methods
    async onSign() {
        try {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            let res = await this.$axios.$post("/auth/signup", data);

            console.log(res);
            if(res.success) {
                let resAuth = await this.$auth.loginWith("local", { data: {
                    email: this.email,
                    password: this.password
                } })
                console.log("respuesta", resAuth);

                this.$router.push("/");
            }
        } catch (e) {
            console.log(e);
        }
    }
}