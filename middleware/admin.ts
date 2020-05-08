import { Middleware } from '@nuxt/types'

const isAdmin : Middleware = ({ store, redirect }) => {
    if (store.state.auth.user.rol != "admin") {
        return redirect('/')
    }
}

export default isAdmin