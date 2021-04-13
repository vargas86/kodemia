/*
$("#btn-save").click(() => {
  console.log("click del boton");
});
$("#text").toggle();
*/

$("input[type=radio]").on("click", () => {
    $("#figure").removeClass();
    let valueRadio = $("input:checked").val();
    $("#figure").addClass(valueRadio);
  });
  
  let arrayImages = [
    "https://i.picsum.photos/id/574/536/354.jpg?hmac=tR-H1BlNikxy4fV6npSM86lpUr0HdUGnNG7x1nKQ0nw",
    "https://i.picsum.photos/id/555/536/354.jpg?hmac=aF45Vii-LNBJEAJ8Tlz9iLUcU9z37EEJTMPpIw5gVhI",
    "https://i.picsum.photos/id/289/536/354.jpg?hmac=XN9NHKDsoBgdrYLLDkKeQIz3fm361kQlmZy0nbugKBc",
    "https://i.picsum.photos/id/66/536/354.jpg?hmac=UmgWEtQqVhOw7Gjf1y8zVbflvYhVcWaNHYTLwBFoOoI",
    "https://i.picsum.photos/id/650/536/354.jpg?hmac=Kva1m2M_HYiscRccb3XKqWDNVM4-ynlIAAClIU1BOvU",
  ];
  
  $("#picture").attr("src", arrayImages[0]);
  $("#picture").attr("data-position", 0);
  
  $("#next").click(() => {
    let valuePicture = parseInt($("#picture").attr("data-position"));
    if (valuePicture < arrayImages.length) {
      console.log(valuePicture);
      $("#picture").attr("src", arrayImages[valuePicture + 1]);
      $("#picture").attr("data-position", valuePicture + 1);
    } else {
      return false;
    }
  });
  
  $("#preview").click(() => {
    let valuePicture = parseInt($("#picture").attr("data-position"));
    if (valuePicture > 0) {
      console.log(valuePicture);
      $("#picture").attr("src", arrayImages[valuePicture - 1]);
      $("#picture").attr("data-position", valuePicture - 1);
    } else {
      return false;
    }
  });