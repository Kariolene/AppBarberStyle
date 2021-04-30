const BASE_API='https://607a5bfdbd56a60017ba29de.mockapi.io/api';
const DATABASE_API = 'https://60807fcea5be5d00176ddc15.mockapi.io/Api/appBarberStyle/barber/barber'

export default {

    
//........................................................
// USUÁRIO
//........................................................

//  Cadastrar usuário
    signUp: async (name, email, celular,apelido, dataNascimento, password ) => {

        var link = '/appBarberStyle/users/';
            var link2 = BASE_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, celular,apelido,dataNascimento, password })});
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

    signUpAtualize: async (id,name, email, celular,apelido, password, dataNascimento) => {
        
        var link = '/appBarberStyle/users/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, celular,apelido, password, dataNascimento})});

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
            'Content-Type': 'application/json'},
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


//........................................................
// BARBEARIA
//........................................................

//Obter barbearia

    getBarber: async({data})=>{

        /*var link = '/appBarberStyle/barbearia/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'GET',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
           // body: JSON.stringify({email,name,password})
        });
            const json = await req.json();
            return json;
    */
        const req =await fetch('https://607a5bfdbd56a60017ba29de.mockapi.io/api/appBarberStyle/barbearia')
        const json =await req.json();
        return json;
    },


//........................................................
//Cadastrar barbearia

    signUpBarber: async (   nameBarbearia,
                            nameResponsavel,
                            contatoBarbearia, 
                            email,
                            passwordBarber,
                            cnpj
                            ) => {

        var link = '/appBarberStyle/barbearia/';
            var link2 = BASE_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    nameBarbearia,
                    nameResponsavel,
                    contatoBarbearia, 
                    email,
                    passwordBarber,
                    cnpj})});
                const json = await req.json();
                return json;
            
        },

//........................................................
//Atualizar barbearia

    signUpBarberAtualizar: async (  nameBarbearia,
                                    nameResponsavel,
                                    contatoBarbearia, 
                                    email,
                                    passwordBarber,
                                    cnpj
                                    ) => {

        var link = '/appBarberStyle/barbearia/';
            var link2 = BASE_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'PUT',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                            nameBarbearia,
                            nameResponsavel,
                            contatoBarbearia, 
                            email,
                            passwordBarber,
                            cnpj})});
                const json = await req.json();
                return json;
            
        },
//........................................................
//Deletar  barbearia
    deleteBarber: async(id)=>{

        var link = '/appBarberStyle/barbearia/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'DELETE',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        // body: JSON.stringify({email,name,password})
        });
            const json = await req.json();
            return json;
    },

//Obter barbearia

    getBarberAll: async()=>{

        var link = '/appBarberStyle/barbearia/1';
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'GET',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
           // body: JSON.stringify({email,name,password})
        });
            const json = await req.json();
            return JSON.stringify(json);
    },
//........................................................
// Serviços da barbearia
//........................................................



};