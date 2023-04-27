/* eslint-disable camelcase */
<template>
  <section class="container">
    <modal-profile-fullname :init-user="user" />
    <h1 class="flex items-center mb-6 text-2xl font-black uppercase">
      <span class="flex-1">Wallet Profile</span>
    </h1>
    <span class="block mb-2 opacity-80">
        In this page, you can withdraw the money you have and increase your balance. When you increase your balance, you need to wait for a time
    </span>
    <!-- Adding the row to the code: -->
    <div class="grid grid-cols-4 gap-3">
        <!-- Product 1 (Total): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://www.freeiconspng.com/thumbs/money-icons/money-icon-29.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">Total -- {{ this.user.total }}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 2 (Bitcoin): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">BTC -- {{this.user.btc}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 3 (Ethereum): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">ETH -- {{this.user.eth}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 4 (Ethereum -- Bep): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">ETH(bep) -- {{this.user.ethbep}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 5 (USDT Trc20) -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">USDT(trc20) -- {{this.user.usdttrc20}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 6 (USDT bep20): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">USDT(bep) -- {{this.user.usdtbep}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <!-- Product 6 (Dogecoin): -->
         <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://cdn-icons-png.flaticon.com/512/6001/6001356.png" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">Doge -- {{this.user.doge}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product 7 (Litcoin): -->
        <div class="col-span-4 space-y-3 lg:col-span-1">
        <!-- Container2: -->
        <div class="p-8 bg-white rounded-xl">
            <!-- Container 3: -->
            <div class="flex items-center space-x-4">
                <!-- Display Flex Item 1: -->
                <div class="relative rounded-full cursor-pointer group">
                    <img class="w-24 h-24 rounded-full" src="https://www.salomonstore.sk/wp-content/uploads/2023/02/1-light-coin-kac-dolar.png" />
                </div>
                <!-- Display Flex Item 2: -->
                <div class="flex flex-col">
                    <div class="flex items-center">
                        <div class="flex">
                            <p class="flex items-center font-semibold text-md">Litcoin -- {{this.user.litcoin}}&nbsp;</p>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- Product 8 (Tron): -->
          <div class="col-span-4 space-y-3 lg:col-span-1">
            <!-- Container2: -->
            <div class="p-8 bg-white rounded-xl">
                <!-- Container 3: -->
                <div class="flex items-center space-x-4">
                    <!-- Display Flex Item 1: -->
                    <div class="relative rounded-full cursor-pointer group">
                        <img class="w-24 h-24 rounded-full" src="https://logowik.com/content/uploads/images/tron-trx-icon3386.logowik.com.webp" />
                    </div>
                    <!-- Display Flex Item 2: -->
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="flex">
                                <p class="flex items-center font-semibold text-md">TRX -- {{this.user.trx}}&nbsp;</p>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block w-4 h-4 mr-2"><g fill="none" fill-rule="evenodd"><g><g><g><g transform="translate(-810 -32) translate(0 14) translate(798 6) translate(12 12)"><circle cx="8" cy="8" r="8" fill="#FFE14D" fill-rule="nonzero"></circle><path fill="#FB3" fill-rule="nonzero" d="M16 8c0-4.411-3.589-8-8-8v16c4.411 0 8-3.589 8-8z"></path><path fill="#FDB902" fill-rule="nonzero" d="M8 14.094c-3.36 0-6.094-2.734-6.094-6.094C1.906 4.64 4.64 1.906 8 1.906c3.36 0 6.094 2.734 6.094 6.094 0 3.36-2.734 6.094-6.094 6.094z"></path><path fill="#FD8C02" fill-rule="nonzero" d="M14.094 8c0-3.36-2.734-6.094-6.094-6.094v12.188c3.36 0 6.094-2.734 6.094-6.094z"></path><path fill="#DB7900" d="M7.838 4.5v.847h.404V4.5h.778v.847H12v1.57L9.555 9.35H12v1.255H9.02v.895h-.777l-.001-.895h-.404v.895h-.777l-.001-.895h-.939l3.952-3.892H4.016V5.348l3.044-.001V4.5h.778zM6.575 9.256L5.198 10.59H4V9.256h2.575zM8.76 7.278l-1.506 1.46H4.016v-1.46h4.745z"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <t-button @click="withdrawMoney()" class="w-full" :style="{marginTop: 20+'px', marginBottom: 10+'px'}"  variant="primary">
        Withdraw Money
    </t-button>
    <!-- Adding the row to the code: -->
    <div class="grid grid-cols-4 gap-3">
        <div class="col-span-4 lg:col-span-5">
            <div class="p-8 bg-white rounded-xl">
                <div class="grid grid-cols-1 gap-3 lg:grid-cols-1">
                    <!-- Space 1: -->
                    <div class="w-full">
                        <h2 class="mb-3 text-lg font-semibold">Information</h2>
                        <form @submit.prevent="increaseBalance()">
                            <label class="block">
                                <span class="block mb-2 opacity-80">Balance: </span>
                                <div class="relative">
                                    <t-input
                                    v-model="user.balance"
                                    type="number"
                                    class="pl-12"
                                    />
                                    <img
                                    src="https://w7.pngwing.com/pngs/273/94/png-transparent-dollar-coin-icon-symbol-trademark-yellow-coin-us-dollar-gold-coin-trademark-orange.png"
                                    class="absolute w-8 h-4 transform -translate-y-1/2 left-3 top-1/2"
                                    alt=""
                                    />
                                </div>
                            </label>
                            <label class="block">
                                <span class="block mb-2 opacity-80">Telephone Number:</span>
                                <div class="relative">
                                    <t-input
                                    v-model="user.phone" 
                                    type="number"
                                    class="pl-12"/>
                                    <img 
                                    src="https://e7.pngegg.com/pngimages/818/957/png-clipart-computer-icons-telephone-call-graphics-telephone-number-telephone-text-telephone-call-thumbnail.png"
                                    class="absolute w-8 h-4 transform -translate-y-1/2 left-3 top-1/2"
                                    alt=""/>
                                </div>
                            </label>
                            <label class="block">
                                <span class="block mb-2 opacity-80">Wallet Address</span>
                                <div class="relative">
                                    <t-input 
                                    v-model="user.walletAddress"
                                    type="text"
                                    class="pl-12"
                                    />
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                                    class="absolute w-8 h-3 transform -translate-y-1/2 left-3 top-1/2"
                                    alt="icon3"/>
                                </div>
                            </label>
                            <label class="block">
                                <span class="block mb-2 opacity-80">Currency</span>
                                <div class="relative">
                                    <select :style="{paddingTop: 10+'px', paddingBottom: 10+'px'}" class="w-full pl-12" v-model="user.currency">
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>ETH | bep</option>
                                        <option>USDT | trc20</option>
                                        <option>USDT | bep</option>
                                        <option>DOGE</option>
                                        <option>Litcoin</option>
                                        <option>TRX</option>
                                    </select>
                                    <img 
                                    src="https://w7.pngwing.com/pngs/273/94/png-transparent-dollar-coin-icon-symbol-trademark-yellow-coin-us-dollar-gold-coin-trademark-orange.png"
                                    class="absolute w-8 h-3 transform -translate-y-1/2 left-3 top-1/2"
                                    alt=""/>
                                </div>
                            </label>
                            <label class="block">
                                <span class="block mb-2 opacity-80">Full Name</span>
                                <div class="relative">
                                    <t-input 
                                    v-model="user.fullName"
                                    type="text"
                                    class="pl-12"
                                    />
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                                    class="absolute w-8 h-3 transform -translate-y-1/2 left-3 top-1/2"
                                    alt="icon3"/>
                                </div>
                            </label>
                            <label class="block">
                                <span class="block mb-2 opacity-80">Last Name</span>
                                <div class="relative">
                                    <t-input 
                                    v-model="user.lastName"
                                    type="text"
                                    class="pl-12"
                                    />
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                                    class="absolute w-8 h-3 transform -translate-y-1/2 left-3 top-1/2"
                                    alt="icon3"/>
                                </div>
                            </label>
                            <t-button type="submit" :style="{marginTop: 10+'px', marginBottom: 10+'px'}" class="w-full" variant="primary">
                                Increase Balance
                            </t-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-html="this.user.code">

    </div>
  </section>
</template>

<script>
import EditIcon from '@/static/img/icon/edit.svg?inline'
import CheckIcon from '@/static/img/icon/check.svg?inline'
import VkIcon from '@/static/img/social/vk.svg?inline'
import ModalProfileFullname from '~/components/modal/modal-profile-fullname.vue'

export default {
  components: {
    EditIcon,
    CheckIcon,
    ModalProfileFullname,
    VkIcon,
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        referenceCode: '',
        otherCode: '',
        password: '',
        password_confirmation: '',
        balance: '',
        phone: '',
        walletAddress: '',
        currency: '',
        fullName: '',
        lastName: '',
        total: 0,
        btc: 0,
        eth: 0,
        ethbep: 0,
        usdttrc20: 0,
        usdtbep: 0,
        doge: 0,
        litcoin: 0,
        trx: 0, 
        code : "<table><tr><th>Balance</th><th>Phone</th><th>Wallet Address</th><th>Currency</th><th>Full Name</th><th>Last Name</th><th>Status</th></tr>",
      },
    }
  },
  mounted() {
    Object.assign(this.user, this.$auth.user);
    let id= this.$auth.user.id;
    this.$axios.post("http://localhost:3334/getMyInfos", {
        id: id
    }).then((response)=>{
        let data = response.data;
        if(data.status == "yes"){
            alert(data.error);
        }
        else{
            let totalVal = data.total;
            let btcVal = data.btc;
            let ethVal = data.eth;
            let ethbepVal = data.ethbepVal;
            let usdttrc20Val = data.usdttrc20;
            let usdtbepVal = data.usdtbep;
            let dogeVal = data.doge;
            let litcoinVal = data.litcoin;
            let trxVal = data.trx;

            this.user.total = totalVal;
            this.user.btc = btcVal;
            this.user.eth = ethVal;
            this.user.ethbep = ethbepVal;
            this.user.usdttrc20 = usdttrc20Val;
            this.user.usdtbep = usdtbepVal;
            this.user.doge = dogeVal;
            this.user.litcoin = litcoinVal;
            this.user.trx = trxVal;
        }
    });
    this.$axios.post("http://localhost:3334/getMyPayments", {
        "id": id,
        "balance": this.user.balance,
        "phone": this.user.phone,
        "walletAddress": this.user.walletAddress,
        "currency": this.user.currency,
        "fullName": this.user.fullName,
        "lastName": this.user.lastName
    }).then((response) => {
        let data = response.data;
        if(data.status == "yes"){
            alert(data.error);
        }
        else{
            for(let i = 0; i < data.data.length; i++){
                //balance, phone, wallet address, currency, fullname, lastname, status
                let codeOne = "<tr>";
                let userVal = data.data[i].user;
                let idVal = data.data[i].id;
                let balanceVal = data.data[i].balance;
                let phoneVal = data.data[i].phone;
                let walletAddressVal = data.data[i].walletAddress;
                let currencyVal = data.data[i].currency;
                let fullNameVal = data.data[i].fullName;
                let lastNameVal = data.data[i].lastName;
                let durumuVal = data.data[i].durumu;
                codeOne += "<td>"+balanceVal+"</td><td>"+phoneVal+"</td><td>"+walletAddressVal+"</td><td>"+currencyVal+"</td><td>"+fullNameVal+"</td><td>"+lastNameVal+"</td><td>"+durumuVal+"</td></tr>";
                this.user.code += codeOne;
            }
            this.user.code += "</table>";
        }
    }); 
  },
  methods: {
    async increaseBalance(){
        let id = this.$auth.user.id;
        //id, balance, phone, walletAddress, currency, fullName, lastName
        this.$axios.post("http://localhost:3334/increaseBalance", {
            id: id,
            balance: this.user.balance,
            phone: this.user.phone,
            walletAddress: this.user.walletAddress, 
            currency: this.user.currency, 
            fullName: this.user.fullName,
            lastName: this.user.lastName
        }).then((response) =>{
            let data = response.data;
            if(data.status == "yes"){
                alert(data.error);
            }
            else{
                let checkout_url = data.data.checkout_url;
                window.open(checkout_url, "_blank",'noreferrer');
                alert("Successfull");
            }
        });
    },  
    async withdrawMoney(){
        alert("bahis olurlar");
        //balance,phone,walletAddress, currency, fullName,lastName
        if(this.user.balance == ""){
            alert("Balance is empty!");
        }
        else if(this.user.phone == ""){
            alert("Phone Number is empty!");
        }
        else if(this.user.walletAddress == ""){
            alert("Wallet Address is empty!");
        }
        else if(this.user.currency == ""){
            alert("Currency is empty!");
        }
        else if(this.user.fullName == ""){
            alert("Full name is empty!");
        }
        else if(this.user.lastName == ""){
            alert("Last name is empty!");
        }
        else{
            let id = this.$auth.user.id;
            //balance, phone, wallet, currency, id
            this.$axios.post("http://localhost:3334/withdrawMoney", {
                id: id,
                balance: this.user.balance,
                phone: this.user.phone,
                wallet: this.user.walletAddress, 
                currency: this.user.currency
            }).then(function(task){
                let data = task.data;
                console.log(data);
                if(data.status == "yes"){
                    alert(data.error);
                }
                else{
                    alert("Successfull");
                    this.$router.go();
                }
            });
        }
    },

    async getMoney(){
        //balance,phone,walletAddress, currency, fullName,lastName
        if(this.user.balance == ""){
            alert("Balance is empty!");
        }
        else if(this.user.phone == ""){
            alert("Phone Number is empty!");
        }
        else if(this.user.walletAddress == ""){
            alert("Wallet Address is empty!");
        }
        else if(this.user.currency == ""){
            alert("Currency is empty!");
        }
        else if(this.user.fullName == ""){
            alert("Full name is empty!");
        }
        else if(this.user.lastName == ""){
            alert("Last name is empty!");
        }
        else{
            
        }
    },
    async changeReference1(){
      alert("Your reference code cannot be changed.");
    },
    async changeReference2(){
      let value = this.user.otherCode;
      let id = this.$auth.user.id;
      this.$axios.post("http://localhost:3334/inviteReference", {
        id: 14, 
        code: "158575"
      }).then((response) => {
        let data = response.data;
        if(data.status == "yes"){
          alert(data.error);
          this.$router.go();
        }
        else{
          alert("Successfull");
          this.$router.go();

        }
      });
    },
    async updateUser(field) {
      await this.$axios
        .put('/api/v1/profile', {
          [field]: this.user[field],
        })
        .then((response) => {
          this.$auth.fetchUser()
        })
    },
    async updatePassword() {
      // eslint-disable-next-line camelcase
      await this.$axios
        .put('/api/v1/profile', {
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        })
        .then((response) => {
          this.$auth.fetchUser()
        })
    },
    async connectVk() {
      const token = this.$auth.strategy.token.get()
      await this.$auth.loginWith('vkontakte', {
        params: { state: token, jwt: token, asd: 'asd' },
      })
    },
    async updateAvatar(e) {
      const formData = new FormData()
      formData.append('avatar', e.target.files[0])
      await this.$axios
        .put('/api/v1/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.$auth.fetchUser()
        })
    },
    hasSocial(provider) {
      return !!(
        this.$auth.user.socials.length &&
        this.$auth.user.socials.find((x) => x.provider === provider)
      )
    },
  },
}
</script>
<style>
    table{
        width: 100%;
    }
    td{
        text-align: center;
        border:1px solid #ccc;
    }
    th{
        text-align: center;
        border: 1px solid #ccc;
    }
</style>

