import { getApiNoAuth } from '../utils'

export default {
    getAdmin(window){
        return getApiNoAuth()
        .get('/admins')
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    postAdmin(window, username, password){
        return getApiNoAuth()
        .post('/admins',{
            username : username,
            password : password
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    deleteAdmin(window, id){
        return getApiNoAuth()
        .delete('/admins/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}