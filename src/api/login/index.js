import { getApiNoAuth } from '../utils'

export default {
    userLogin(window, username, password){
        return getApiNoAuth()
        .post('/Users/login',{
            username : username,
            password : password
        })
        .then(function(response){

            // if (localStorage.getItem(username) === 'admin') {
            //     this.$router.go('/admin')
            // } else {
            //     this.$router.go('/home')
            // }

            // localStorage.setItem('username', username)
            // localStorage.setItem('token', response.data.id)
            // localStorage.setItem('ttl', response.data.ttl)
            // localStorage.setItem('time-login', response.data.created)
            // return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}