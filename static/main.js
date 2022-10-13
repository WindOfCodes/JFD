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
        <a target="_blank" href=${
          channel.customUrl
        }?utm_source=google&utm_medium=email&utm_campaign=channels_for_devs>
        <div class="channel_img"><img src='${
          channel.thumbnails.high.url
        }'></div>
        <div class="channel_info">
          <span class="channel_name">${channel.title}</span>
          <div class="data_nums">
            <div class="num_data subs">
              <span class="param">subscribers:</span>
              <span class="value">${channel.statistics.subscriberCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div class="num_data videos">
              <span class="param">videos:</span>
              <span class="value">${channel.statistics.videoCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div class="num_data views">
              <span class="param">views:</span>
              <span class="value">${channel.statistics.viewCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
          </div>
        </div>
        </a>
      </div>
        `;
    }

    mainSection.innerHTML = out;
  });

// const form = document.querySelector(".sort__options");
// const radioGroup = document.querySelectorAll(".choice--radio");

// for (const radio of radioGroup) {
//   radio.addEventListener("change", (e) => {
//     for (const radio of radioGroup) {
//       if (radio.checked) {
//         if (radio.id == "sort-title") {
//           channels.sort((a, b) =>
//             a.channel_name > b.channel_name
//               ? 1
//               : b.channel_name > a.channel_name
//               ? -1
//               : 0
//           );
//         } else if (radio.id == "sort-subscribers") {
//         } else if (radio.id == "sort-videos") {
//         } else {
//         }
//       }
//     }
//   });
// }

const clearBtn = document.querySelector(".button");
clearBtn.addEventListener("click", function () {
  let choose = document.querySelectorAll(".choice--radio");
  let input = document.querySelector(".filter__input");
  for (let i = 0; i < choose.length; i++) choose[i].checked = false;
  input.value = "";
});

const modeBtn = document.querySelector(".d_mode");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark_body");
});
