const getHomePage = (search, images = [], error) => {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      *,body{
          font-family:Arial;
      }
      form{
          display:flex;
          flex-direction:column;
          align-items: center;
      }
       .search-area{
          
       }
       .mt-30{
          margin-top: 20px
       }
      </style>
  </head>
  <body>
      <form>
          <h1>Text to Image GPT4</h1>
          <div class="search-area">
              <input placeholder="type here..." value="${search}" style="padding:10px; border: 2px solid #00bfff;border-radius:5px;width:400px" name="search" type="text" required/>
              <input type="submit" value="Generate" style="padding:10px; border: 2px solid #00bfff;border-radius:5px; background-color: #00bfff; color:#fff; font-weight:700;" />
          </div>
          ${error ? `<p  class="mt-30">${error}</p>` : ""}
          ${
            images?.length
              ? images.map(
                  (image) =>
                    `<img class="mt-30" src="${image.url}" alt="image"/>`
                )
              : ""
          }
      </form>
  </body>
  </html>
      `;
};

module.exports = { getHomePage };
