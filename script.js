let url = "https://kontests.net/api/v1/all";

let x = fetch(url);
x.then((response) => {
  return response.json();
}).then((result) => {
  console.log(result);
  ihtml = "";
  for (let data in result) {
    console.log(result[data]);
    ihtml += `
    <div class="card m-2" style="width:18rem">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${result[data].name}</h5>
        <p class="card-text">start time:${result[data].start_time}</p>
        <p class="card-text">start time:${result[data].end_time}</p>      
        <a href="${result[data].url}" class="btn btn-primary">check out</a>
    </div>
  </div>`;
  }
  cardContainer.innerHTML = ihtml;
});
