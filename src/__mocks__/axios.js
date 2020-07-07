'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
            "id": "111",
            "image": "aul1.jpg",
            "author": "random author",
            "title": "Lorem Ipsum"
        },
        {
            "id": "112",
            "image": "aul5.jpg",
            "author": "random author",
            "title": "Lorem Ipsum"
        }
        ]
    });
}
};