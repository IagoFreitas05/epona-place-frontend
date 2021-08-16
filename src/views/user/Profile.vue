<template>
  <div>
    <div class="mt-8 w-full ">
      <div class="w-full mx-auto flex ">
          <div class=" w-full ">
            <form class="bg-white flex  rounded grid gap-10    px-8 pt-6 pb-8 mb-4">
              <div class="flex items-center mt-3 justify-center gap-4" id="perfil_picture">
                <div>
                  <img class="rounded-full" src=" https://www.stevensegallery.com/100/100" alt="">
                </div>
                <div>
                  <button id="alterImg" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    alterar imagem de perfil
                  </button>
                </div>
              </div>
              <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-3 ">
                <div class="items-center sm:w-full  lg:w-full items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
                  <div class="mb-4">
                    <h4 class="text-md font-bold text-purple-600 my-4"> informações pessoais</h4>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          nome
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="nome">
                      </div>
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                          sobrenome
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" placeholder="sobrenome">
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          data de nascimento
                        </label>
                        <input class="shadow appearance-none border
                          rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dt_nascimento" type="date">
                      </div>
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          telefone
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cellphone" type="tel" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="(dd) xxxxx-xxxx">
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          gênero
                        </label>
                        <select name="gender" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender"  >
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
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpf" type="text" placeholder="cpf">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- dados de acesso -->
                <div class="items-center items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
                  <h4 class="text-md font-bold text-purple-600 my-4"> dados de acesso</h4>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >
                      email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email">
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      senha
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                  </div>
                </div>

                <!-- endereço residencial -->
                <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
                  <h4 class="text-md font-bold text-purple-600 my-4">endereço residencial</h4>
                  <div class="mb-4 ">
                    <label class="block text-gray-700 text-sm font-bold mb-2 " >
                      logradouro
                    </label>
                    <div class="flex">
                      <div class="w-4/5 p-1">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logradouro" type="text" placeholder="rua, avenida, etc">
                      </div>
                      <div class="w-1/5 p-1">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numero" type="text" placeholder="nº">
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      localização
                    </label>
                    <div class="flex">
                      <div class="w-full p-1">
                        <input class="shadow appearance-none border  rounded w-full   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="cidade">
                      </div>
                      <div class="p-1">
                        <select name="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state">
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
                </div>
              </div>
              <div class="flex items-center justify-between">
                <button @click="alterData" id="save" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  alterar dados
                </button>
              </div>
            </form>
          </div>
      </div>
      <div class="w-full mx-auto rounded  bg-white   px-8 pt-6 pb-8 mb-4">
        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-3 mb-3">
          <h1 class="text-xl font-bold text-purple-600 my-4">informações adicionais</h1>
          <button @click="showCardModal" class=" border-2 border-purple-200 text-purple-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">novo cartão de crédito</button>
          <button @click="showFormAddAddres" class=" border-2 border-purple-200 text-purple-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">novo endereço de entrega</button>
        </div>

        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showCardAndAddress === true">
          <!-- cartões de crédito -->
          <div class="items-center items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4"> cartões de credito</h4>
            <table class="table-auto w-full text-justify text-sm ">
              <thead>
              <tr>
                <th class="w-1/2">número</th>
                <th class="w-1/2"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2345 2345 3456 2345</td>
                <td><button @click="disableConfirmation" class="border-2 border-red-400 hover:bg-white text-red-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">desativar</button></td>
              </tr>
              <tr>
                <td>2332 3423 23423 2343</td>
                <td><button @click="disableConfirmation" class="border-2 border-red-400 hover:bg-white text-red-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">desativar</button></td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- endereço de entrega -->
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">endereços de entrega</h4>
            <table class="table-auto w-full text-justify text-sm ">
              <thead>
              <tr>
                <th >logradouro</th>
                <th >número</th>
                <th class=""></th>
                <th class=""></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Rua das Couves</td>
                <td>12</td>
                <td><button @click="disableConfirmation" class="border-2 border-red-400 hover:bg-white text-red-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">desativar</button></td>
                <td><button @click="showEditAddress" class="border-2 border-yellow-400 text-yellow-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">editar</button></td>

              </tr>
              <tr>
                <td>Rua das tartarugas</td>
                <td>24</td>
                <td><button @click="disableConfirmation" class="border-2 border-red-400 hover:bg-white text-red-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">desativar</button></td>
                <td><button @click="showEditAddress" class="border-2 border-yellow-400 text-yellow-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">editar</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showFormAddCard === true">
          <div class="items-center items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4"> cartões de credito</h4>
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                numero do cartão
              </label>
              <div class="flex">
                <div class="w-5/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="numero do cartão">
                </div>
                <div class="w-1/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_cvv" type="number" placeholder="cvv">
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                bandeira e data de vencimento
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_flag" type="text" placeholder="bandeira do cartão">
                </div>
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_date" type="number" placeholder="ex: 11/28">
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                nome impresso no cartão
              </label>
              <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="card_name" type="text" placeholder="nome indetico ao cartão">
            </div>
            <button @click="saveCreditCardData" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">salvar novo cartão</button>
          </div>
          <button @click="showCardAndAndAddress" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">cancelar</button>
        </div>
        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showFormAddAddress === true">
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">endereço de entrega</h4>
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                logradouro
              </label>
              <div class="flex">
                <div class="w-5/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logradouro" type="text" placeholder="rua, avenida, etc">
                </div>
                <div class="w-1/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numero" type="number" placeholder="nº">
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                localização
              </label>
              <div class="flex">
                <div class="w-full p-1">
                  <input class="shadow appearance-none border  rounded w-full   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="cidade">
                </div>
                <div class="p-1">
                  <select name="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state">
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
            <button @click="saveAddressData" type="button" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">salvar novo endereço</button>
          </div>
          <button  @click="showCardAndAndAddress" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">cancelar</button>
        </div>

        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showFormEditAddress === true">
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">endereço de entrega</h4>
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                logradouro
              </label>
              <div class="flex">
                <div class="w-5/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logradouro" value="rua das couves" type="text" placeholder="rua, avenida, etc">
                </div>
                <div class="w-1/6 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numero" value="12" type="number" placeholder="nº">
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                localização
              </label>
              <div class="flex">
                <div class="w-full p-1">
                  <input class="shadow appearance-none border  rounded w-full   py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value="Carajá" id="city" type="text" placeholder="cidade">
                </div>
                <div class="p-1">
                  <select name="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state">
                    <option value="AP">Amapá</option>
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
            <button @click="saveAddressData" type="button" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">salvar edição</button>
          </div>
          <button  @click="showCardAndAndAddress" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">cancelar</button>
        </div>
      </div>
      <Footer></Footer>
  </div>
  </div>
</template>

<script>
  import Footer from "@/components/footer/Footer";
  import swal from "sweetalert";
  export default{
    name: 'profile',
    components:{
      Footer
    },
    data(){
      return{
        showCardAndAddress:true,
        showFormAddCard:false,
        showFormAddAddress:false,
        showFormEditAddress:false
      }
    },
    methods:{
      alterData(){
        swal("dados alterados com sucesso", "", "success");
      },
      saveCreditCardData(){
        swal("cartão de credito salvo com sucesso", "suas informações sempre estarão seguras conosco", "success");
        this.showCardAndAndAddress()
      },
      saveAddressData(){
        swal("endereço de entrega salvo com sucesso", "", "success");
        this.showCardAndAndAddress()
      },
      showCardModal(){
        this.showCardAndAddress = false
        this.showFormAddAddress = false
        this.showFormEditAddress = false
        this.showFormAddCard = true
      },
      showFormAddAddres(){
        this.showCardAndAddress = false
        this.showFormAddAddress = true
        this.showFormAddCard = false
        this.showFormEditAddress = false
      },
      showCardAndAndAddress(){
        this.showCardAndAddress = true
        this.showFormAddAddress = false
        this.showFormAddCard = false
        this.showFormEditAddress = false
      },
      showEditAddress(){
        this.showCardAndAddress = false
        this.showFormAddAddress = false
        this.showFormAddCard = false
        this.showFormEditAddress = true
      },
      disableConfirmation(){
        swal({
          title: "tem certeza?",
          text: "uma vez deletado, essa informação não poderá ser recuperada!",
          icon: "warning",
              buttons: ["cancelar", "tenho certeza"],
          dangerMode: true,
        })
            .then((willDelete) => {
              if (willDelete) {
                swal("Delatado com sucesso!", {
                  icon: "success",
                });
              } else {
                swal("uffa, nada aconteceu!");
              }
            });
      }
    }
  }
</script>