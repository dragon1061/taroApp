import * as homeApi from './service';

export default {
  namespace: 'index',
  state: {
    products_list: [],
    page: 1,
  },
  effects: {
    * product(_, {call, put, select}) {
      const { page, products_list } = yield select(state => state.home);

      const { code, data } = yield call(homeApi.indexlist, {
        page,
        mode: 1,
        type: 0,
      });
      console.log('from-index-model:',data);
      // if (code === '1') {
      //   yield put({ type: 'save',payload: {
      //     products_list: page >= 1 ? [...products_list,...data.rows] : data.rows,
          
      //   } });
      // }
    }
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
