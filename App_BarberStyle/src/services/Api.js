const BASE_API='https://607a5bfdbd56a60017ba29de.mockapi.io/api';
const CARTAO_API = 'https://60807fcea5be5d00176ddc15.mockapi.io/Api/appBarberStyle/cartao/cartao'

export default {

    
//........................................................
// USUÁRIO
//........................................................

//  Cadastrar usuário
    signUp: async (email,name,password, celular, apelido,dataNasc ) => {

        var link = '/appBarberStyle/users/';
            var link2 = BASE_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,name,password, celular, apelido,dataNasc})});
                const json = await req.json();
                return json;
            
        },

//........................................................
//Obter usuário

   getUser: async(id)=>{

        var link = '/appBarberStyle/users/'+id;
       // var link = '/appBarberStyle/users?email=kas@gmail.com';
        var link2 = BASE_API+link;
        
         const req = await fetch(`${link2}`,{
               method: 'GET',
               headers: {
                   Accept:'application/json',
                   'Content-Type': 'application/json'
               },
               //body: JSON.stringify({email,password})
         });
            const json = await req.json();
            return json;
    },

    

//........................................................
//Atualizar cadastro 

    signUpAtualize: async (id,email,name,password, celular, apelido) => {
        
        var link = '/appBarberStyle/users/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,name,password, celular, apelido})});

         const json = await req.json();
         return json;

    },

//........................................................
//Deletar cadastro de usuario
signUpDelete: async (id) => {

    var link = '/appBarberStyle/users/'+id;
    var link2 = BASE_API+link;

    const req = await fetch(`${link2}`,{
        method: 'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'
        },
    });

     const json = await req.json();
     return json;
},

//........................................................
/*Cadastrar autenticação */
//POST
  /*  signIn: async (email,password, tokenAutentc) => {
    
            var link = '/appBarberStyle/auten/';
            var link2 = BASE_API+link;

            const req = await fetch(`${link2}`,{
                method: 'POST',
                headers: {
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password,tokenAutentc}) });

                const json = await req.json();
                return json;

    },*/

//........................................................
//Atualizar autenticação

   /* signInAtualize: async (id,email,password) => {

        var link = '/appBarberStyle/auten/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})});

         const json = await req.json();
         return json;

    },*/
    
//........................................................
//Deletar autenticação de usuario
  /*  signInDelete: async (id) => {

        var link = '/appBarberStyle/auten/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'DELETE',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        });

         const json = await req.json();
         return json;

    },*/

//Obter cartao

    getCartao: async(id)=>{

        var link = '/Api/appBarberStyle/cartao/'+id;
        var link2 = CARTAO_API+link;

        const req = await fetch(`${link2}`,{
            method: 'GET',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },           
        });
            const json = await req.json();
            return json;
    },
//Cadastrar cartao

    signUpBarber: async (
        numeroCartao
        ) => {

        var link = '/Api/appBarberStyle/cartao/';
            var link2 = CARTAO_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numeroCartao})});
                const json = await req.json();
                return json;
            
        },
//Atualizar cartao

    attCatao: async (
        numeroCartao
        ) => {

        var link = '/Api/appBarberStyle/cartao/';
            var link2 = CARTAO_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'PUT',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numeroCartao})});
                const json = await req.json();
                return json;
            
        },
//Deletar  cartao
    deleteCartao: async(id)=>{

        var link = '/Api/appBarberStyle/cartao/'+id;
        var link2 = CARTAO_API+link;

        const req = await fetch(`${link2}`,{
            method: 'DELETE',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        
        });
            const json = await req.json();
            return json;
    },
    
};