console.log("Fraud Toaster loaded.");

setTimeout(() => {
  const pageData = {
    title: document.title,
    url: window.location.href,
    text: document.body.innerText,
  };

  chrome.runtime.sendMessage({
    type: "PAGE_DATA",
    data: pageData,
  });
}, 1000); /*One second delay to allow pages to load content before reading. 
Change to 3000 if Fraud Toaster is not working properly on some sites. 
Bugged and will need to change it to a constant scan for page changes, or something else.*/
