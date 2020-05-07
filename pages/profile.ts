import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Profile extends Vue {
    email: string = '';
    name: string = '';
    password: string = '';
    // computed
    public get user(): object {
        return this.$auth.user
    }
    //Lifehooks
    created() {
        this.defaultProfile();
    }
    //method 
    defaultProfile() : any {
        let auth = this.$store.state.auth.user
        this.name = auth.name;
        this.email = auth.email;
    }
    async updateProfile() {
        const data : object = {
            name: this.name,
            email: this.email,
            password: this.password
        } 
        try {
            //SI no estuvieramos utilizar nuxt-auth deberiamos de enviar el token
                //Pero como estamos utilizando la libreria ella se encarga de ello
            let res = await this.$axios.$put("/api/auth/user", data)
            if (res.success) {
                await this.$auth.fetchUser();

                let auth = this.$store.state.auth.user
                this.name = auth.name;
                this.email = auth.email;
                this.password = '';

            }
        } catch (e) {
            console.log(e);
        }
    }
}