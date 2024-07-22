const testimunials = [
    {
        name: "GPT, chat",
        photoUrl:
            "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's products are incredibly user-friendly and innovative, making everyday tasks seamless and enjoyable. The exceptional ]quality and sleek design of their devices set them apart in the tech industry.",
    },

    {
        name: "Jane Doe, CEO of Tech Innovations",
        photoUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "The service was exceptional and beyond my expectations. I highly recommend them to anyone in need of quality work.",
    },

    {
        name: "John Smith, Marketing Manager at Creative Solutions",
        photoUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I had an amazing experience with their customer support. They were friendly, efficient, and solved my issue quickly.",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimunial()

function updateTestimunial () {
    const {name, photoUrl, text} = testimunials [idx];
    imgEl.src = photoUrl; 
    textEl.innerText = text; 
    usernameEl.innerText = name;
    idx++;
    if (idx === testimunials.length){
        idx = 0;
    }
    setTimeout (() => {
        updateTestimunial()
    }, 10000);  
}

