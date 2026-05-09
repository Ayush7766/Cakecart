
const line = document.querySelector(".line1");
if (line && typeof cakesInfo !== "undefined" && Array.isArray(cakesInfo)) {
  for (let i = 0; i < cakesInfo.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src="${cakesInfo[i].img}" />
      <p class="mcart">
        <img src="${cakesInfo[i].cart}" alt="" />
      </p>
    </div>
    <div class="pp">${cakesInfo[i].name} <span>${cakesInfo[i].category}</span></div>
  </div>`;
  }
}

//Selector
const dropIcon = document.querySelector(".dropIcon");
const drop = document.querySelector(".drop");

let isDropOpen = false;
dropIcon.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  isDropOpen = !isDropOpen;
  drop.style.display = isDropOpen ? "block" : "none";
});

// Close menu when clicking a link
const dropLinks = drop.querySelectorAll("a");
dropLinks.forEach(link => {
  link.addEventListener("click", () => {
    isDropOpen = false;
    drop.style.display = "none";
  });
});

// Mobile WhatsApp button
const mobileWhatsAppBtn = document.getElementById("mobileWhatsappBtn");
if(mobileWhatsAppBtn) {
  mobileWhatsAppBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = "block";
    isDropOpen = false;
    drop.style.display = "none";
  });
}

// WhatsApp Modal Functionality
const modal = document.getElementById("whatsappModal");
const openModalBtn = document.getElementById("openWhatsappModal");
const closeBtn = document.getElementsByClassName("close")[0];
const sendBtn = document.getElementById("sendWhatsapp");
const messageInput = document.getElementById("whatsappMessage");

// Open modal
if (openModalBtn) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = "block";
  });
}

// Close modal
if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = "none";
    messageInput.value = ""; // Clear message
  });
}

// Close modal when clicking outside
document.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    messageInput.value = ""; // Clear message
  }
});

// Send WhatsApp message
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const message = messageInput.value.trim();
  if (message === "") {
    alert("Please enter a message before sending.");
    return;
  }
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp URL (replace with your actual WhatsApp number)
  const whatsappURL = `https://wa.me/919960755543?text=${encodedMessage}`;
  
  // Open WhatsApp
  window.open(whatsappURL, '_blank');
  
  // Close modal and clear input
  modal.style.display = "none";
  messageInput.value = "";
});

// Allow sending with Enter key
messageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendBtn.click();
  }
});
