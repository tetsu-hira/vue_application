import Api from './index';

export default {
  testPosting () {
    const item = { text: '成功！'};
    return Api().post('/test', item)
  }
  // ここに他の処理も追加可能
};