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

const modeBtn = document.querySelector(".d_mode");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark_mode");
});
