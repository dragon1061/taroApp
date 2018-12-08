import Request from '../../utils/request';

export const indexlist = data => Request({
  url: 'homepage/get_goodslist.html',
  method: 'POST',
  data,
});
