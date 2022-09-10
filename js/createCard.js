
const createCard = (orderId) => {
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')

    let colDiv = document.createElement('div');
    let cardDiv = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cancelBtn = document.createElement('i')
    let cardBody1 = document.createElement('div')
    let cardFooter = document.createElement('div')
    let cardBodyPara1 = document.createElement('p')
    let cardBodyPara2 = document.createElement('p')
    let spanText = document.createElement('span')
    
    

    colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList = 'card text-center'
    cardHeader.classList = 'card-header'
    cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
    cardBody1.classList = 'card-body'
    cardFooter.classList = 'card-footer'
    cardBodyPara1.classList = 'card-text'
    cardBodyPara2.classList = 'card-text'
    spanText.classList = 'badge rounded-pill bg-success'

    spanText.id = orderId

    let date = new Date();
    let n = date.toDateString();
    let time = date.toLocaleTimeString();

    cardHeader.innerHTML = `<span>Order ID: <b>${orderId}</b></span>`
    cardBodyPara1.innerHTML = 'Medium Corn pizza <br> Total Price $20 <br>'
    spanText.innerText = 'Order received'
    cardFooter.innerText = n +   ' at ' + time
    
    cardHeader.appendChild(cancelBtn)
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody1)
    cardDiv.appendChild(cardFooter)
    cardBody1.appendChild(cardBodyPara1)
    cardBody1.appendChild(cardBodyPara2)
    cardBodyPara2.appendChild(spanText)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)

    
    // <i class = "fa-solid fa-xmark cancel-btn"></i>

    cancelBtn.addEventListener('click', ()=> {
        colDiv.style.display = 'none'
    })
}