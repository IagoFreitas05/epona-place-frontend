<template>
  <div class="mt-8  ">
    <div class=" w-screen max-w-lg   mx-auto">
      <form class="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4" @submit.prevent="storeRegister">
        <h4 class="text-xl font-bold text-purple-600 my-4">dados pessoais</h4>
        <div class="mb-4">
          <div class="flex">
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                nome
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="nome"
                  v-model="name"
                  required
              >
            </div>
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                sobrenome
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last_name"
                  name="sobrenome"
                  type="text"
                  placeholder="sobrenome"
                  v-model="lastName"
                  required
              >
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex">
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                data de nascimento
              </label>
              <input
                  class="shadow appearance-none border
                          rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="date"
                  id="dt_nascimento"
                  type="date"
                  v-model="birthday"
                  required
              >
            </div>
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                telefone
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cellphone"
                  type="tel"
                  name="phone"
                  placeholder="(dd) xxxxx-xxxx"
                  v-model="celphone"
                  required
              >
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex">
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                gênero
              </label>
              <select
                  name="gender"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  v-model="gender"
                  required
              >
                <option value="">gênero</option>
                <option value="masculino">masculino</option>
                <option value="feminino">feminino</option>
                <option value="na">não binário</option>
              </select>
            </div>
            <div class="w-1/2 p-1">
              <label class="block text-gray-700 text-sm font-bold mb-2" >
                cpf
              </label>
              <input
                  class="shadow
                    appearance-none border
                      rounded w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline"
                  name="cpf"
                  id="cpf"
                  type="text"
                  placeholder="cpf"
                  v-model="cpf"
                  required
              >
            </div>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            email
          </label>
          <input class="shadow appearance-none border rounded
              w-full py-2 px-3 text-gray-700
                  leading-tight focus:outline-none focus:shadow-outline"
                 name="email"
                 id="email"
                 type="email"
                 placeholder="email"
                 v-model="mail"
                 required
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            senha
          </label>
          <input name="password"
                 class="shadow appearance-none border
                  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
                    focus:outline-none focus:shadow-outline"
                 id="password"
                 type="password"
                 placeholder="******************"
                 v-model="password"
                 required
          >
        </div>
        <h4 class="text-xl font-bold text-purple-600 my-4">endereço</h4>
        <div class="mb-4 ">
          <label class="block text-gray-700 text-sm font-bold mb-2 " >
            logradouro
          </label>
          <div class="flex">
            <div class="w-5/6 p-1">
                <input name="logradouro"
                       class="shadow appearance-none
                        border rounded w-full py-2 px-3 t
                          ext-gray-700 leading-tight focus:outline-none
                            focus:shadow-outline" id="logradouro"
                       type="text"
                       placeholder="rua, avenida, etc"
                       v-model="address"
                       required
                >
            </div>
            <div class="w-1/6 p-1">
              <input
                  name="number"
                  class="shadow appearance-none border
                    rounded w-full py-2 px-3 text-gray-700
                      leading-tight focus:outline-none
                        focus:shadow-outline"
                  id="numero"
                  type="number"
                  placeholder="nº"
                  v-model="number"
                  required
              >
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            localização
          </label>
          <div class="flex">
            <div class="w-full p-1">
              <input class="shadow
                appearance-none border
                rounded w-full
                  py-2 px-3 text-gray-700 mb-3 leading-tight
                    focus:outline-none focus:shadow-outline"
                     name="city"
                     id="city"
                     type="text"
                     placeholder="cidade"
                     v-model="city"
                     required
              >
            </div>
            <div class="p-1">
              <select name="state" required v-model="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espirito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MT">Mato Grosso</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button  id="save" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            cadastrar
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Epona Sports. Todos os direitos reservados.
      </p>
  </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name:"Register",
  data(){
    return {
      name: "",
      lastName:"",
      birthday:"",
      celphone:"",
      gender:"",
      cpf:"",
      mail:"",
      password:"",
      address:"",
      number:"",
      city:"",
      state:""
    }
  },
  methods:{
    storeRegister(){
      this.axios.post("http://localhost:8080/place/client",{
        name: this.name,
        lastName: this.lastName,
        birthday: this.birthday,
        celphone: this.celphone,
        gender: this.gender,
        cpf: this.cpf,
        mail: this.mail,
        password:this.password,
        address: this.address,
        number: this.number,
        city: this.city,
        state: this.state,
        role:"USER",
        typeAddress:"n/a",
        country:"n/a",
        nameAddress:"n/a",
        postalCode:"n/a",
        category:"n/a",
        observation:"n/a",
        complement:"n/a"
      })
          .then( (response) =>{
            if(response.data == "sucesso"){
              swal("Uhuu 0/","Cadastro feito com sucesso, faça seu login agora","success")
                  .then(() => {
                    this.$router.push("Login")
                  });
            }else{
              swal(response.data )
            }
          })
    },
    mounted(){

    }
  }
}
</script>
