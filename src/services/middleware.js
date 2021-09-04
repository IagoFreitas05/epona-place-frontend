import Cookie from 'js-cookie';
export default {
    auth(to, from, next){
        const token = Cookie.get('token');
        //ajax pro backend para checar a validade do token

        if (!token){
            next('/login')
        }
        next();
    },
}