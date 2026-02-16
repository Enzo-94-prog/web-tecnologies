

/* script.js viene utilizzato per fare i test e non viene
/  utilizzato all'interno della nostra pagine. Le funzionalità
/  principali che ci interessano sono contenute in Cookie.js   */


//setSessionTest("test,1234")
//setPersistentCookie("test,1234,10")

setCustomCookie(
  
  "test2", 

  5678,
  
  {'secure':true, 'max-age':3600, 'path':'/'});


setCustomCookie(
  
  "test", 

  1234,
  
  {'HttpOnly':true, 'max-age':3600, 'path':'/'});


  //deleteCookie("test")
  //deleteCookie("test2")
    