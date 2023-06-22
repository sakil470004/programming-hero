// jhanker mahbub work 9 
const selectH2 = document.querySelectorAll('h2');
// change all h2 color light blue
for (const element of selectH2) {
    element.style.color = 'lightblue'
}
// change backpack section background
document.getElementById('backpack').style.backgroundColor = 'tomato'

// select all card class set border radius 30px
const selectedCards = document.getElementsByClassName('card');
for (const card of selectedCards) {
    card.style.borderRadius = '30px'
}
// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
function handleLogoClick() {
    console.log('log clicked')
}
// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyNowButton = document.getElementsByClassName('panda-btn-buy-now');
for (const singleButton of buyNowButton) {
    singleButton.addEventListener('click', function (event) {
        const selectFullCard = event.target.parentNode.parentNode;
        selectFullCard.style.display = 'none'
    })
}
// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const selectedButton = document.getElementById('btn-submit')
    if (text === 'email') {
        selectedButton.removeAttribute('disabled')
    } else {
        selectedButton.setAttribute('disabled', true)
    }

})
// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

const allImg = document.querySelectorAll('img');
for (const img of allImg) {
    img.addEventListener('mouseenter', function (event) {
        img.style.transform = 'scale(0.8)'
        img.style.transition = 'transform 0.7s'
    })
    img.addEventListener('mouseleave', function () {
        img.style.transform = 'scale(1)'
    })
}

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    console.log(event.target)
    event.target.style.backgroundColor = 'skyblue';
})
