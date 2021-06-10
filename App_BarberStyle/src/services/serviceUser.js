
import service from '../services/service';


//KAS - Crud usando axios - Inicio
const obterUsuarios = () =>{
 return service.get(users);
}

const obterUser = () =>{
  return service.get(`users/${id}`);
 }

 const criarUser = data => {
   return service.post("users/", data )
 }

 const atualizarUser = (id, data) => {
  return service.put(`users/${id}`, data)
 }

 const deleteUser = id => {
  return service.put(`users/${id}`)
 }

 export default{
   obterUser,
   criarUser,
   atualizarUser,
   deleteUser
 }
 //KAS - Crud usando axios - Fim