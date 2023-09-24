import { createApi } from "unsplash-js";

const main = document.querySelector('.main-content');
const unsplash = createApi({
  accessKey: '3ZiwAqownu5aIj0CF2RLX8MOKLZEeNwfWg9AhJ-9HmI',
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var photoId = urlParams.get('d')

// console.log(photoId);

unsplash.photos.get({ photoId: 'mtNweauBsMQ' }).then(result => {
    if (result.type === 'success') {
        const photo = result.response;
        console.log(photo);
        const userName = photo.user.username;
        const name = photo.user.name;
        const first_name = photo.user.first_name;
        const artPhoto = photo.urls.small;
        const alt_description = photo.alt_description;
        const totalLikes = photo.user.total_likes;
        const profileImage = photo.user.profile_image.large;
        const tags = photo.tags;

        const a =
        `
            <div class="photo-details">
            <img src="${profileImage}" alt="${name}" />
            <div class="user-details">

                <h2>Artist: ${name}</h2>
                <h2>Likes: ${totalLikes}❤️</h2>
            </div>
            </div>
            <div class="tag">
                <p></p>
            </div>
                    `;
        main.innerHTML = a;
      
    }
});