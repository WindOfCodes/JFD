fetch("./channels.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (channels) {
    let mainSection = document.querySelector(".js-content");
    let out = "";
    for (let channel of channels) {
      out += `
        <div class="channel_block">
        <div class="channel_img"><img src='${channel.thumbnails.high.url}'></div>
        <div class="channel_info">
          <span class="channel_name">${channel.title}</span>
          <div class="data_nums">
            <div class="num_data subs">
              <span class="param">subscribers:</span>
              <span class="value">${channel.statistics.subscriberCount}</span>
            </div>
            <div class="num_data videos">
              <span class="param">videos:</span>
              <span class="value">${channel.statistics.videoCount}</span>
            </div>
            <div class="num_data views">
              <span class="param">views:</span>
              <span class="value">${channel.statistics.viewCount}</span>
            </div>
          </div>
        </div>
      </div>
        `;
    }

    mainSection.innerHTML = out;
  });

// fetch("./channels.json")
//   .then((response) => response.json())
//   .then((json) => {
//dla każdego obiekcie (8) z array wygeneruj element card
//pobierz z każdego obiektu dane
//wprowadź danę do wygenerowanego elementu html
//   });

// function cardTemplate(card) {
//   return `
//     <div class="channel_block">
//         <div class="channel_img" src="${card.thumbnails.high}"></div>
//         <div class="channel_info">
//           <span class="channel_name">${card.title}</span>
//           <div class="data_nums">
//             <div class="num_data subs">
//               <span class="param">subscribers:</span>
//               <span class="value">${card.statistics.subscriberCount}</span>
//             </div>
//             <div class="num_data videos">
//               <span class="param">videos:</span>
//               <span class="value">${card.statistics.videoCount}</span>
//             </div>
//             <div class="num_data views">
//               <span class="param">views:</span>
//               <span class="value">${card.statistics.viewCount}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
// }

// async function channels() {
//   const response = await fetch("./channels.json");
//   const channels = await response.json();

//   channelsText(channels);
//   channelsblocks(channels);
// }

// function channelsText(obj) {
//   const mainBlock = document.querySelector(".wrapper__header");
//   const chBlock = document.createElement("div");
//   chBlock.textContent = obj.squadName;
//   mainBlock.appendChild(chBlock);

//   const blockParam = document.createElement("p");
//   blockParam.textContent = `nowy: ${obj.dupaaaa} // Formed: ${obj.formed}`;
//   mainBlock.appendChild(blockParam);
// }

// function channelsblocks(obj) {
//   const section = document.querySelector(".wrapper__main");
//   const cards = obj.members;

//   for (const card of cards) {
//     const newCard = document.createElement("div");
//     const cardPic = document.createElement("span");
//     const cardInfo = document.createElement("div");
//     const cardChName = document.createElement("span");

//     cardPic.textContent = card.title;
//     cardChName.textContent = card.description;

//     const stats = card.statistics.videoCount;
//     for (const stat of stats) {
//       const lintItems = document.createElement("li");
//       lintItems.textContent = videoCount;
//       cardInfo.appendChild(lintItems);
//     }

//     newCard.appendChild(cardPic);
//     newCard.appendChild(cardInfo);
//     newCard.appendChild(cardChName);

//     section.appendChild(newCard);
//   }
// }

// channels();

const modeBtn = document.querySelector(".d_mode");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark_mode");
});
