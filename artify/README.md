## **Hackathon 1.0 | Web Development**
## **Artify Gallery App**

This Artify Gallery App repository contains a gallery app built by using of HTML5, CSS3, JavaScript and Unsplash API. Please follow the below given instructions to set it up.

## ***Features***

1. Different Gallery Categories!
2. Interactive Layout!
3. Wishlist!
4. Detail description of photos!
   
>[Live Working Demo]()

## ***Instructions***

1. Clone the ``Artify Gallery App`` repo and run ``npm install`` !
2. From the app folder run ``npm run dev`` !


---

**Use of unsplash package and get data from unsplash api**

```js
    npm install unsplash-js

    import { createApi } from 'unsplash-js';

    const unsplash = createApi({
      accessKey: 'access-key',
    });

    unsplash.search.getPhotos({
      query: 'category',
      page: 1,
      perpage: 12,
      orientation: 'portrait',
    }).promise();
```





**Running a cleanup bash script**

```sh
    sudo exec cleanup
``````     
