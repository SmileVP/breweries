//to get the elements of the html
//let input_search = document.querySelector("#input_text");
let search_button = document.querySelector("#search_button");
var data_field = document.querySelector(".data_container");


//created an event for search button
search_button.addEventListener("click", () => {
  let list = document.querySelector(".list");
  console.log(list.text);
  let Breweries = async () => {
    // try {
    let api = `https://api.openbrewerydb.org/breweries?by_type=${list}`;

    console.log(api);
    let res = fetch(api, {
      method: "GET",
    });

    let data = await res;
    console.log(data);
    let data_json = await data.json();
    console.log(data_json);
    //to get the breweries details

    for (let i = 0; i < data_json.length; i++) {
      var name = data_json[i].name;
      var type = data_json[i].brewery_type;
      var website = data_json[i].website_url;
      var address = data_json[i].country;
      var phone = data_json[i].phone;
      console.log(name);
      console.log(type);
      console.log(website);
      console.log(address);
      console.log(phone);

      let content = `<div class="card" style="width: 18rem;">
               <div class="card-body">
                   <h5 class="card-title">Name: ${name}</h5>
                  <h6 class="card-text ">Type: ${type}</h6>
                   <h6 class="card-text ">Website: ${website}</h6>
                   <h6 class="card-text ">Address: ${address}</h6>
                   <h6 class="card-text ">Phone: ${phone}</h6>
               </div>
               </div>`;
               //to append the data in the document

               let details = document.createElement("div");
               details.innerHTML = content;
               data_field.append(details);

               
    }
    //} catch (err) {
    // alert when there is an error
    //  window.alert("An error occurred :(");
    //console.log(err);    }
    //     input_search.value=""
  };
  Breweries();
});
