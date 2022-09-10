const executeOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    document.getElementById('order-id-input').value = ''

   createCard(orderId);

   chefReceived(orderId)
   .then(pizzaSauceAdded)
   .then(firstLayerOfCheezeAdded)
   .then(toppingsAdded)
   .then(secondLayerOfCheezeAdded)
   .then(pizzaBaked)
   .then(oreganoAddedAndPacked)
   .then(packageReceivedAtCounter)
   .then((orderId) => {
       console.log('The order is ready and handed over to the Zomato delivery guy!')
       document.getElementById(orderId).innerText = 'Sent for delivery'
   })
   .catch((err) => console.log(err))
}