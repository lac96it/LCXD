import _ from 'lodash';

export default function fetchAllPage(apiFunc = () => null, params = {}) {
  return apiFunc(params)
    .then(response => {
      if (response.last_page > 1) return Promise.all(_.range(2, response.last_page + 1)
        .map(page => apiFunc({ ...params, page })))
        .then(arrRes => {
          return [response, ...arrRes];
        })

      return [response];
    }).then(allRes => {
      let arrData = allRes.map(i => i.data);

      return _.flatten(arrData);
    })
}