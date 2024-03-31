document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.cards-container');
    const cardCount = 40;
  
    for (let i = 1; i <= cardCount; i++) {
      const cardHTML = `
        <div class="cards">
          <div class="card${i} cc" style="background-image:url('https://source.unsplash.com/275x340/?people&amp;${i}') ">
            <div class="card-info">
              <div class="username">Username</div>
              <div class="logos">
                <div class="bookmark"><img src="bookmark.svg" alt=""></div>
                <div class="like"><img src="like.svg" alt=""></div>
              </div>
            </div>
          </div>
          <div class="post-info">
            <div class="user-photo">
              <img src="https://source.unsplash.com/275x340/?people&amp;${i}" alt="">
              <span>UserName</span>
            </div>
            <div class="likesandviews">
            <div class="likes">
              <img src="like.svg" alt=""><span>${i}.${i+3}k</span></div>
              <div class="views">
              <img src="views.svg" alt=""><span>${i*i}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
  });