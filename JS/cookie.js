function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

  function is_background_changed(element_id){
      //console.log("hmm" + getCookie("background"));
      if(getCookie("background")=="changed")
      {
          deleteCookie("background");
          change_background_image(element_id);
          //console.log("succesfuly");
      }
  }
  function is_theme_changed(element_id){
      if(getCookie("theme")=="changed"){
          deleteCookie("theme");
          change_theme(element_id);
      }
  }

  function is_gallery_started(){
    if(getCookie("gallery_timer")=="enabled")
    {
      deleteCookie("gallaey_timer");
      start_stop_gallery();
    }
  }

  function set_gallery_size(){
    if(getCookie("gallery_size")=="small"){
      small_sizing();
      document.getElementById("small_sizing_button").checked= true;
    }
    if(getCookie("gallery_size")=="medium"){
      medium_sizing();
      document.getElementById("medium_sizing_button").checked= true;
    }
    else{
      document.getElementById("large_sizing_button").checked= true;
      large_sizing();
    }
  }

  function  is_block_hidden(element_id){
    if(getCookie(element_id)=="hidden")
    {
      deleteCookie(element_id);
      hide_block(element_id);
    }
  }

  function is_text_style_changed(element_id){
    if(getCookie("text_style")=="changed")
    {
      deleteCookie("text_style");
      change_text_style(element_id);
    }
  }

