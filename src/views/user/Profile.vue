<template>
  <div class="flex">
      <div class="mt-12 p-2 w-1/12 text-left " >
        <div class="flex-col flex gap-4 ">
          <div class="bg-blue-500  text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <router-link class="text-center" to="/login">sair</router-link>
          </div>
        </div>
      </div>
      <div class="mt-8 w-11/12 ">
      <div class="w-full mx-auto flex ">
          <div class=" w-full ">
            <form class="bg-white flex  rounded grid gap-10    px-8 pt-6 pb-8 mb-4" @submit.prevent="editUserData()" autocomplete="on">
              <div class="sm:grid md:grid md:grid-cols-2 lg:grid-cols-2  sm:grid-cols-1 md:gap-4">
                <div class="items-center border-2  border-purple-200 shadow-lg rounded-md p-5 ">
                  <div class="mb-4">
                    <h4 class="text-md font-bold text-purple-600 my-4"> informações pessoais</h4>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          nome
                        </label>
                        <input
                            name="edit-name"
                            class="shadow appearance-none
                              border rounded w-full py-2 px-3
                                text-gray-700 leading-tight
                                  focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="nome"
                            v-model="name"
                        >
                      </div>
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                          sobrenome
                        </label>
                        <input
                            name="edit-lastname"
                              class="shadow appearance-none border
                                rounded w-full py-2 px-3
                                  text-gray-700 leading-tight
                                    focus:outline-none
                                      focus:shadow-outline"
                            id="last_name"
                            type="text"
                            placeholder="sobrenome"
                            v-model="last_name"
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
                        <input name="edit-date"
                          class="shadow appearance-none border
                            rounded w-full py-2 px-3 text-gray-700
                              leading-tight focus:outline-none
                                focus:shadow-outline"
                               id="dt_nascimento"
                               type="date"
                               v-model="birthday"
                        >
                      </div>
                      <div class="w-1/2 p-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                          telefone
                        </label>
                        <input
                            name="edit-phone"
                            class="shadow appearance-none border
                              rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none
                                  focus:shadow-outline"
                              id="cellphone"
                            type="tel"

                            placeholder="(dd) xxxxx-xxxx"
                            v-model="celphone"
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
                        <select v-model="gender" id="edit-gender" name="edit-gender" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   >
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
                            name="edit-cpf"
                            class="shadow appearance-none border
                              rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none
                                  focus:shadow-outline"
                            id="cpf"
                            type="text"
                            placeholder="cpf"
                            v-model="cpf"
                        >
                      </div>
                    </div>
                  </div>
                  <h4 class="text-md font-bold text-purple-600 my-4"> dados de acesso</h4>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >
                      email
                    </label>
                    <input name="edit-email"
                           class="shadow appearance-none
                            border rounded w-full py-2 px-3 text-gray-700
                              leading-tight focus:outline-none
                                focus:shadow-outline"
                           id="email"
                           type="email"
                           placeholder="email"
                           v-model="mail"
                    >
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      senha
                    </label>
                    <input name="edit-password"
                           class="shadow appearance-none border  rounded w-full py-2 px-3
                            text-gray-700 mb-3 leading-tight focus:outline-none
                              focus:shadow-outline"
                           id="password"
                           type="text"
                           placeholder="digite sua nova senha aqui"
                           v-model="password"
                    >
                  </div>
                </div>

                <!-- alteração de endereço de entrega -->
                <div class="items-center border-2  border-purple-200 shadow-lg rounded-md p-5 ">
                  <h4 class="text-md font-bold text-purple-600 my-4">endereço residencial</h4>
                  <div class="mb-4 ">
                    <label class="block text-gray-700 text-sm font-bold mb-2 " >
                      Nome do endereço, País e estado
                    </label>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <input name="edit-address-name"
                               class="shadow appearance-none border rounded w-full
                                py-2 px-3 text-gray-700 leading-tight
                                  focus:outline-none focus:shadow-outline"
                               id="edit-address-name"
                               type="text"
                               placeholder="nome do endereço"
                               v-model="nameAddress"
                        >
                      </div>
                      <div class="w-1/2 p-1">
                        <input name="edit-pais"
                                class="shadow appearance-none border rounded
                                  w-full py-2 px-3 text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline"
                               type="text"
                               placeholder="digite o nome do pais"
                               v-model="country"
                        >
                      </div>
                      <div class="w-1/2 p-1">
                        <select  name="state" v-model="state" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="edit-state">
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
                  <div class="mb-4 ">
                    <label class="block text-gray-700 text-sm font-bold mb-2 " >
                      logradouro
                    </label>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <input name="edit-address-type" class="shadow appearance-none border rounded
                        w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline"
                               id="edit-address-type"
                               type="text"
                               placeholder="tipo do logradouro"
                               v-model="typeAddress"
                        >
                      </div>
                      <div class="w-5/6 p-1">
                        <input name="edit-address"  v-model="address" class="shadow appearance-none border rounded
                        w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none
                        focus:shadow-outline"
                               id="edit-address"
                               type="text"
                               placeholder="nome do logradouro"

                        >
                      </div>
                      <div class="w-1/6 p-1">
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline"
                            id="edit-number"
                            name="edit-number"
                            type="number"
                            placeholder="nº"
                            v-model="number"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      cidade e complemento
                    </label>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <input name="edit-city"
                               v-model="city"
                               class="shadow appearance-none border  rounded w-full
                               py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                               focus:shadow-outline"
                               id="edit-city"
                               type="text"
                               placeholder="cidade">
                      </div>
                      <div class="p-1 w-1/2">
                        <input
                            v-model="complement"
                                 class="shadow appearance-none border  rounded w-full
                                py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                                focus:shadow-outline"
                            id="edit-complement"
                            name="edit-complement"
                            type="text"
                            placeholder="complemento">
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      CEP e observação
                    </label>
                    <div class="flex">
                      <div class="w-1/2 p-1">
                        <input  v-model="postalCode" class="shadow
                        appearance-none border  rounded w-full
                         py-2 px-3 text-gray-700 mb-3 leading-tight
                         focus:outline-none focus:shadow-outline"
                                id="edit-cep"
                                name="edit-cep"
                                type="text"
                                placeholder="cep">
                      </div>
                      <div class="p-1 w-1/2">
                        <input  v-model="observation"
                                class="shadow appearance-none border
                                rounded w-full
                                py-2 px-3 text-gray-700 mb-3 leading-tight
                                focus:outline-none focus:shadow-outline"
                                id="edit-obs"
                                name="edit-obs"
                                type="text"
                                placeholder="observação">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <button  id="save"
                        class="bg-blue-500
                        hover:bg-purple-600
                        text-white font-bold py-2
                        px-4 rounded focus:outline-none
                        focus:shadow-outline"
                        type="submit">
                  alterar dados
                </button>
              </div>

            </form>
          </div>
      </div>
      <div class="w-full mx-auto rounded  bg-white   px-8 pt-6 pb-8 mb-4">
        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-3 mb-3">
          <h1 class="text-xl font-bold text-purple-600 my-4">informações adicionais</h1>
          <button @click="showCardModal" class=" border-2 border-purple-200 text-purple-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="new-credit-card">novo cartão de crédito</button>
          <button @click="showFormAddAddres" class=" border-2 border-purple-200 text-purple-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="new-deliver-address">novo endereço de entrega</button>
        </div>

        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showCardAndAddress === true">
          <!-- cartões de crédito -->
          <div class="items-center items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4"> cartões de credito</h4>
            <table class="table-auto text-purple-400 font-bold w-full text-justify text-sm ">
              <thead>
              <tr >
                <th class="w-1/2">número</th>
                <th class="w-1/2"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in cards" :key="item.id">
                <td>{{item.cardNumber}}</td>
                <td><button id="desativar" @click="removeCreditCard(item.id)" class="border-2 border-red-400 hover:bg-white text-red-500 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">desativar</button></td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- endereço de entrega -->
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">endereços de entrega</h4>
            <table class="table-auto text-purple-400 w-full text-justify text-sm ">
              <thead>
              <tr>
                <th >logradouro</th>
                <th >número</th>
                <th class=""></th>
                <th class=""></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in addresses" :key="item.id" >
                <td>{{ item.address }}</td>
                <td>{{ item.number }}</td>
                <td><button
                    @click="removeAddresses(item.id)"
                      class="border-2 border-red-400 hover:bg-white
                        text-red-500 text-xs font-bold py-2 px-4 rounded
                          focus:outline-none focus:shadow-outline">desativar</button></td>
                <td><button id="button_edit_address"
                            @click="showEditAddress(item.id)"
                            class="border-2 border-yellow-400 text-yellow-500 text-xs
                              font-bold py-2 px-4 rounded focus:outline-none
                                focus:shadow-outline">editar</button></td>
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
                  <input
                      name="add-card_number"
                      class="shadow appearance-none border
                        rounded w-full py-2 px-3 text-gray-700
                          leading-tight focus:outline-none focus:shadow-outline"
                      id="card_number"
                      type="text"
                      placeholder="numero do cartão"
                      v-model="cardNumber"
                      required
                  >
                </div>
                <div class="w-1/6 p-1">
                  <input
                      name="add-card_cvv"
                      class="shadow appearance-none border rounded
                        w-full py-2 px-3 text-gray-700 leading-tight
                          focus:outline-none focus:shadow-outline"
                      id="card_cvv"
                      type="number"
                      placeholder="cvv"
                      required
                      v-model="cvv"

                  >
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                bandeira e data de vencimento
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input
                      name="add-card_flag"
                      class="shadow appearance-none border
                        rounded w-full py-2 px-3 text-gray-700
                          leading-tight focus:outline-none focus:shadow-outline"
                      id="card_flag"
                      type="text"
                      placeholder="bandeira do cartão"
                      v-model="flag"
                  >
                </div>
                <div class="w-1/2 p-1">
                  <input
                      name="add-card_date"
                      class="shadow appearance-none border
                        rounded w-full py-2 px-3 text-gray-700
                          leading-tight focus:outline-none
                            focus:shadow-outline"
                      id="card_date"
                      type="text"
                      placeholder="ex: 11/28"
                      v-model="expireDate"
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                nome impresso no cartão
              </label>
              <input
                  name="add-card_name"
                    class="shadow appearance-none border
                      rounded w-full py-2 px-3 text-gray-700
                        mb-3 leading-tight focus:outline-none
                        focus:shadow-outline"
                  id="card_name"
                  type="text"
                  placeholder="nome indetico ao cartão"
                  v-model="cardName"
              >
            </div>
            <button
                  id="save_new_card"
                  @click="saveCreditCardData"
                  class="bg-blue-500 hover:bg-purple-600
                    text-white font-bold py-2 px-4 rounded
                      focus:outline-none focus:shadow-outline"
                  type="button">salvar novo cartão</button>
          </div>
          <button @click="showCardAndAndAddress" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">cancelar</button>
        </div>
        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showFormAddAddress === true">
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">endereço de entrega</h4>
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                Nome do endereço, País e estado
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow
                  appearance-none border rounded w-full py-2 px-3
                    text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                         name="add-address-name"
                         id="add-address-name"
                         type="text"
                         placeholder="nome do endereço"
                        v-model="newnameAddress"
                  >
                </div>
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="add-pais"
                         name="add-pais"
                         type="text"
                         placeholder="digite o nome do pais"
                         v-model="newcountry"
                  >
                </div>
                <div class="w-1/2 p-1">
                  <select v-model="newstate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="add-state" name="add-state">
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
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                logradouro
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="add-address-type"
                         name="add-address-type"
                         type="text"
                         placeholder="tipo do logradouro"
                        v-model="newtypeAddress"
                  >
                </div>
                <div class="w-5/6 p-1">
                  <input class="shadow appearance-none border rounded w-full
                    py-2 px-3 text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                          id="add-address"
                         name="add-address"
                         type="text"
                         placeholder="nome do logradouro"
                          v-model="newaddress"
                  >
                </div>
                <div class="w-1/6 p-1">
                  <input class="shadow appearance-none border rounded w-full
                    py-2 px-3 text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="add-number"
                         name="add-number"
                         type="number"
                         placeholder="nº"
                        v-model="newnumber"
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                cidade e complemento
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="add-city"
                         name="add-city"
                         type="text"
                         placeholder="cidade"
                        v-model="newcity"
                  >
                </div>
                <div class="p-1 w-1/2">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="add-complement"
                         name="add-complement"
                         type="text"
                         placeholder="complemento"
                        v-model="newcomplement"
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                CEP e observação
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border  rounded w-full
                      py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                        focus:shadow-outline"
                         id="add-cep"
                         name="add-cep"
                         type="text"
                         placeholder="cep"
                        v-model="newpostalCode"
                  >
                </div>
                <div class="p-1 w-1/2">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                    focus:shadow-outline"
                         id="add-obs"
                         name="add-obs"
                         type="text"
                         placeholder="observação"
                        v-model="newobservation"
                  >
                </div>
              </div>
            </div>
            <button
                id="button_new_address"
                @click="saveAddressData" type="button" class="bg-blue-500 hover:bg-purple-600
                  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">salvar novo endereço</button>
          </div>
          <button  @click="showCardAndAndAddress" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">cancelar</button>
        </div>

        <div class="sm:grid sm:grid-cols-1 md:grid md:gap-4 md:grid-cols-2" v-if="showFormEditAddress === true">
          <div class="items-center border-2 border-purple-200 shadow-lg rounded-md p-5 ">
            <h4 class="text-md font-bold text-purple-600 my-4">edição de endereço de entrega</h4>
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                Nome do endereço, País e estado
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded w-full
                    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="edit-deliver-address-name"
                         name="edit-deliver-address-name"
                         type="text"
                         placeholder="nome do endereço"
                        v-model="editnameAddress"
                  >
                </div>
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                      focus:shadow-outline"
                          id="edit-deliver-pais"
                         name="edit-deliver-pais"
                         type="text"
                         placeholder="digite o nome do pais"
                        v-model="editcountry"
                  >
                </div>
                <div class="w-1/2 p-1">
                  <select v-model="editstate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="edit-deliver-state" id="edit-deliver-state">
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
            <div class="mb-4 ">
              <label class="block text-gray-700 text-sm font-bold mb-2 " >
                logradouro
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                      leading-tight focus:outline-none focus:shadow-outline"
                         id="edit-deliver-address-type"
                         name="edit-deliver-address-type"
                         type="text" placeholder="tipo do logradouro"
                        v-model="edittypeAddress"
                  >
                </div>
                <div class="w-5/6 p-1">
                  <input class="shadow appearance-none
                    border rounded w-full py-2 px-3 text-gray-700 leading-tight
                      focus:outline-none focus:shadow-outline"
                         id="edit-deliver-address"
                         name="edit-deliver-address"
                         type="text"
                         placeholder="nome do logradouro"
                        v-model="editaddress"
                  >
                </div>
                <div class="w-1/6 p-1">
                  <input class="shadow appearance-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                    focus:shadow-outline" id="edit-deliver-number"
                         name="edit-deliver-number"
                         type="number" placeholder="nº"
                        v-model="editnumber"
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                cidade e complemento
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                         id="edit-deliver-city"
                         name="edit-deliver-city"
                         type="text"
                         placeholder="cidade"
                        v-model="editcity"
                  >
                </div>
                <div class="p-1 w-1/2">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                         id="edit-deliver-complement"
                         name="edit-deliver-complement"
                         type="text"
                         placeholder="complemento"
                        v-model="editcomplement"
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                CEP e observação
              </label>
              <div class="flex">
                <div class="w-1/2 p-1">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                         id="edit-deliver-cep"
                         name="edit-deliver-cep"
                         type="text"
                         placeholder="cep"
                        v-model="editpostalCode"
                  >
                </div>
                <div class="p-1 w-1/2">
                  <input class="shadow appearance-none border  rounded w-full
                    py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                      focus:shadow-outline"
                         id="edit-deliver-obs"
                         type="text"
                         name="edit-deliver-obs"
                         placeholder="observação"
                        v-model="editobservation"
                  >
                </div>
              </div>
            </div>
            <button id="button_save_edition"
                    @click="editAddressData"
                    type="button"
                    class="bg-blue-500 hover:bg-purple-600 text-white font-bold
                      py-2 px-4 rounded focus:outline-none
                      focus:shadow-outline">
                salvar edição
            </button>
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
  import Cookie from "js-cookie";
  import swal from "sweetalert";
  export default{
    name: 'profile',
    components:{
      Footer
    },
    data(){
      return{
        name:"",
        last_name:"",
        birthday:"",
        celphone:"",
        gender:"",
        cpf:"",
        mail:"",
        password:"",
        typeAddress:"",
        country:"",
        city:"",
        state:"",
        address:"",
        nameAddress:"",
        number:"",
        complement:"",
        postalCode:"",
        category:"",
        observation:"",
        idUser:"",
        idAddress:"",
        actualPassword:"",
        showCardAndAddress:true,
        showFormAddCard:false,
        showFormAddAddress:false,
        showFormEditAddress:false,
        cardNumber:"",
        cvv:"",
        flag:"",
        expireDate:"",
        cardName:"",
        cards:[],
        newtypeAddress:"",
        newcountry:"",
        newcity:"",
        newstate:"",
        newaddress:"",
        newnameAddress:"",
        newnumber:"",
        newcomplement:"",
        newpostalCode:"",
        newcategory:"",
        newobservation:"",
        addresses:[],
        edittypeAddress:"",
        editcountry:"",
        editcity:"",
        editstate:"",
        editaddress:"",
        editnameAddress:"",
        editnumber:"",
        editcomplement:"",
        editpostalCode:"",
        editcategory:"",
        editobservation:"",
        editIdAddress:"",
        editAddressIdUser:""
      }
    },
    methods:{
      removeAddresses(id){
        swal({
          title: "tem certeza?",
          text: "uma vez deletado, essa informação não poderá ser recuperada!",
          icon: "warning",
          buttons: ["cancelar", "tenho certeza"],
          dangerMode: true,
        })
            .then((willDelete) => {
              if (willDelete) {
                let url = `/${id}`
                this.axios
                    .request({
                      url:url,
                      method: 'delete',
                      baseURL: 'http://localhost:8080/place/address',
                      headers: {
                        'Authorization': 'Bearer ' + Cookie.get('token')
                      }
                    })
                    .then(response => {
                      response.data
                      swal("Delatado com sucesso!", {
                        icon: "success",
                      });

                      const index = this.addresses.findIndex( (addresses) => addresses.id === id)
                      this.addresses.splice(this.addresses[index], 1)
                    })
              } else {
                swal("uffa, nada aconteceu!");
              }
            });
      },
      removeCreditCard(id){
        swal({
          title: "tem certeza?",
          text: "uma vez deletado, essa informação não poderá ser recuperada!",
          icon: "warning",
          buttons: ["cancelar", "tenho certeza"],
          dangerMode: true,
        })
            .then((willDelete) => {
              if (willDelete) {
                let url = `/${id}`
                this.axios
                    .request({
                      url:url,
                      method: 'delete',
                      baseURL: 'http://localhost:8080/place/creditCard',
                      headers: {
                        'Authorization': 'Bearer ' + Cookie.get('token')
                      }
                    })
                    .then(response => {
                      response.data
                      swal("Delatado com sucesso!", {
                        icon: "success",
                      });
                      this.loadCreditCardData()
                    })
              } else {
                swal("uffa, nada aconteceu!");
              }
            });
      },
      loadAddressesData(){
        this.cards = null;
        let url = `/findByUserId/${Cookie.get('idUser')}`
        this.axios
            .request({
              url:url,
              method: 'GET',
              baseURL: 'http://localhost:8080/place/address',
              headers: {
                "Authorization":"Bearer  " + Cookie.get('token'),
              }
            })
            .then(response => {
              this.addresses = response.data
            })
      },
      loadCreditCardData(){
        this.cards = null;
        let url = `/findByUserId/${Cookie.get('idUser')}`
        this.axios
            .request({
              url:url,
              method: 'GET',
              baseURL: 'http://localhost:8080/place/creditCard',
              headers: {
                "Authorization":"Bearer  " + Cookie.get('token'),
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
              }
            })
            .then(response => {
              this.cards = response.data
            })
      },
      editUserData(){
        let config = {
          headers:{
            "Authorization":"Bearer " + Cookie.get('token')
          }
        }
        this.axios.put("http://localhost:8080/place/client",{
          name : this.name,
          lastName: this.last_name,
          birthday: this.birthday,
          celphone: this.celphone,
          gender: this.gender,
          cpf: this.cpf,
          password: this.password,
          idUser: this.idUser,
          mail:this.mail,
          typeAddress:this.typeAddress,
          country : this.country,
          state : this.state,
          address : this.address,
          nameAddress : this.nameAddress,
          number : this.number,
          complement : this.complement,
          postalCode : this.postalCode,
          category : this.category,
          observation : this.observation,
          idAddress : this.idAddress,
          actualPassword: this.actualPassword,
          city : this.city
        }, config)
            .then((response)=>{
              if(response.data === " "){
                swal(response.data)
              }
              else{
                swal("Alterado com sucesso", "suas informações sempre estarão seguras conosco", "success");
              }
            }).catch(() =>{
          swal("Oops :(","parece que seus dados estão incorretos.","error")
        })
      },
      editAddressData(){
        let config = {
          headers:{
            "Authorization":"Bearer " + Cookie.get('token')
          }
        }
        this.axios.put("http://localhost:8080/place/address",{
          id: this.editIdAddress,
          idUser: this.editAddressIdUser,
          typeAddress:this. edittypeAddress,
          country : this.editcountry,
          state : this.editstate,
          address : this.editaddress,
          nameAddress : this.editnameAddress,
          number : this.editnumber,
          complement : this.editcomplement,
          postalCode : this.editpostalCode,
          category : "entrega",
          observation : this.editobservation,
          city : this.editcity
        }, config)
            .then((response)=>{
              if(response.data === "sucesso"){
                swal("Alterado com sucesso", "suas informações sempre estarão seguras conosco", "success");
                this.showCardAndAndAddress()
              }
              else{
                swal(response.data)
              }
            }).catch(() =>{
          swal("Oops :(","parece que seus dados estão incorretos.","error")
        })
      },
      saveCreditCardData(){
        let config = {
          headers:{
            "Authorization":"Bearer " + Cookie.get('token'),
            "Content-type":"Application/json"
          }
        }
        this.axios.post("http://localhost:8080/place/creditCard",{
          cardNumber: this.cardNumber,
          cvv: this.cvv,
          flag: this.flag,
          expireDate: this.expireDate,
          cardName: this.cardName,
          idUser: `${Cookie.get('idUser')}`
        }, config)
            .then((response)=>{
              if(response.data === "sucesso"){
                swal("Salvo com sucesso", "suas informações sempre estarão seguras conosco", "success");
                this.loadCreditCardData()
                this.showCardAndAndAddress()
              }
              else{
                swal(response.data)
              }
            }).catch(() =>{
          swal("Oops :(","parece que seus dados estão incorretos.","error")
        })
      },
      saveAddressData(){
        let config = {
          headers:{
            "Authorization":"Bearer " + Cookie.get('token'),
            "Content-type":"Application/json"
          }
        }
        this.axios.post("http://localhost:8080/place/address",{
          typeAddress:this.newtypeAddress,
          country : this.newcountry,
          state : this.newstate,
          address : this.newaddress,
          nameAddress : this.newnameAddress,
          number : this.newnumber,
          complement : this.newcomplement,
          postalCode : this.newpostalCode,
          category : "entrega",
          idUser : Cookie.get('idUser'),
          observation : this.newobservation,
          city : this.newcity
        }, config)
            .then((response)=>{
              if(response.data === " "){
                swal("Salvo com sucesso", "suas informações sempre estarão seguras conosco", "success");
                this.loadAddressesData()
                this.loadCreditCardData()
                this.showCardAndAndAddress()
              }
              else{
                swal(response.data)
              }
            }).catch(() =>{
          swal("Oops :(","parece que seus dados estão incorretos.","error")
        })

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
      showEditAddress(id){

        const index = this.addresses.findIndex( (addresses) => addresses.id === id)
        this.edittypeAddress= this.addresses[index].typeAddress
        this.editcountry= this.addresses[index].country
        this.editcity = this.addresses[index].city
        this.editstate = this.addresses[index].state
        this.editaddress = this.addresses[index].address
        this.editnameAddress = this.addresses[index].nameAddress
        this.editnumber = this.addresses[index].number
        this.editcomplement = this.addresses[index].complement
        this.editpostalCode=this.addresses[index].postalCode
        this.editcategory=this.addresses[index].category
        this.editobservation=this.addresses[index].observation
        this.editIdAddress = this.addresses[index].id
        this.editAddressIdUser = this.addresses[index].idUser
        this.showCardAndAddress = false
        this.showFormAddAddress = false
        this.showFormAddCard = false
        this.showFormEditAddress = true
      },
      loadUserData(){
        let config = {
          headers:{
            Authorization:"Bearer " + Cookie.get('token')
          }
        }
        this.axios.get("http://localhost:8080/place/auth",config)
            .then((response)=>{
              this.name = response.data.name
              this.last_name= response.data.lastName
              this.birthday=response.data.birthday
              this.celphone=response.data.celphone
              this.gender=response.data.gender
              this.cpf=response.data.cpf
              this.idUser=response.data.idUser
              this.mail=response.data.mail
              this.typeAddress = response.data.typeAddress
              this.country = response.data.country
              this.state = response.data.state
              this.address = response.data.address
              this.nameAddress = response.data.nameAddress
              this.number = response.data.number
              this.complement = response.data.complement
              this.postalCode = response.data.postalCode
              this.category = response.data.category
              this.observation = response.data.observation
              this.idAddress = response.data.idAddress
              this.city = response.data.city
              this.actualPassword = response.data.actualPassword
              Cookie.set('idUser', response.data.idUser)
              this.loadCreditCardData()
              this.loadAddressesData()
            })
      },
      verifyToken(){
        if(Cookie.get('token') === " "){
         this.$router.push("Login")
        }else{
          this.loadUserData()
        }
      },
    },
    beforeMount(){
        this.verifyToken()

    },
    created() {

    }
  }
</script>