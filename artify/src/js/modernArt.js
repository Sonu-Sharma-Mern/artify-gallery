import { createApi } from 'unsplash-js';

const main = document.querySelector('.main-content');
const unsplash = createApi({
  accessKey: '3ZiwAqownu5aIj0CF2RLX8MOKLZEeNwfWg9AhJ-9HmI',
});

 unsplash.search.getPhotos({
  query: 'Modern Art',
  page: 1,
  perpage: 12,
  orientation: 'portrait',
}).then(result => {
  if (result.type === 'success') {
    const photos = result.response.results;
    const getUrls = photos.map((i) => {
      return `
         <img class="img-gallery" target="_blank" onclick="location.href='artistDetails.html?d=${i.user.id}'" src="${i.urls.small}" />
      `;
     
    });
    main.innerHTML = getUrls.join('');
    
    console.log(photos);
  }
});


