import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  // document.dir = language === "ar" ? "rtl" : "ltr";
  if(language === "ar"){
    document.dir="rtl"
    
    
  }else{
    document.dir="ltr"

  }
  // document.getElementsById("body").style.textAlign = language === "ar" ? "right":"left"

};
// if(language === "ar"){
//   document.dir="ltr"
  
// }else{
//   document.dir="rtl"
// }