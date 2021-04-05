const catchAsync = require("../utils/catchAsync");
const GetByUrl = require("../utils/AxiosApi");

const images_url =
  "https://my-json-server.typicode.com/coing-dev/photo-api/images";

const photos_url =
  "https://my-json-server.typicode.com/coing-dev/photo-api/photos";

/*
  Since two endpoints are giving us a slightly different objects, 
  We wish to make them the same.
  Each picture will have the same format = {albumId, id, title, path}
*/
function MakeFinalResponse(response_images, response_photos) {
  let data = [];
  response_images.data[0].forEach((picture) => {
    data.push(picture);
  });
  response_photos.data[0].forEach((picture) => {
    temp = {
      albumId: picture.albumId,
      id: picture.id,
      title: picture.title,
      path: picture.url,
    };
    data.push(temp);
  });
  return {
    status: 1,
    data: data,
  };
}

/*
This function create 2 calls, fetching 2 url.
From business aspects, I have made that if 1 of the urls aint responding, 
No picture will be shown.

Of course, we could do it differentaly (like showing all picture that have arrived, regardeles others API calls)
*/
const getImages = catchAsync(async (req, res) => {
  GetByUrl(images_url).then((response_images) => {
    GetByUrl(photos_url).then((response_photos) => {
      // Here we check both calls are successfull
      // We could also do it per response,
      // Depends what your boss is asking for ><
      if (response_images.status == 1 && response_photos.status == 1) {
        // Creating unified data to return
        let final_response = MakeFinalResponse(
          response_images,
          response_photos
        );
        res.send(final_response);
      } else {
        let final_response = { status: 0, data: [] };
        res.send(final_response);
      }
    });
  });
});

module.exports = {
  getImages,
};
