const $gifList = $("#gifList");
function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>");
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
    });
    $gifList.append($newGif);
    $gifList.append($newCol);
  }
}

const $input = $("#search");
$("form").on("submit", async function (e) {
  e.preventDefault();
  let search = $input.val();
  $input.val("");
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  addGif(res.data);
});

$("#removeImages").on("click", function () {
  $gifList.empty();
});
