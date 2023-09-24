import { createApi } from 'unsplash-js';

const main = document.querySelector('.main-content');
const unsplash = createApi({
  accessKey: '3ZiwAqownu5aIj0CF2RLX8MOKLZEeNwfWg9AhJ-9HmI',
});

function getArt() {
  const listItems = document.querySelectorAll('.nav li a');
  for (let i = 0; i <= listItems.length - 1; i++) {
    const listItem = listItems[i].textContent;
    // console.log(listItem);
    if (listItem === 'Classics' || listItem === 'Modern Art' || listItem === 'Sculptures')
      unsplash.search.getPhotos({
        query: listItem,
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
            
          } );
          main.innerHTML = getUrls.join('');
          // console.log(photos);
        }
      });
  }
}
getArt();

// function imageInfo() {
//   const imageInfo = document.querySelectorAll('a img');
//   // console.log(imageInfo);
//   const array = [];
//   for (let i = 0; i < imageInfo.length - 1; i++){
//     const newArray = array.push(imageInfo[i]);
//     console.log(newArray);
//   }
// }




  
// function imageInfo() {
//   const imageInfo1 = document.getElementsByTagName('img');
//   console.log(imageInfo1);
//   const convertToArray = Array.from(imageInfo1);
//   for (let i = 0; i < convertToArray.length; i++){  
//     console.log(convertToArray[i]);
//     }
//   }

// imageInfo();