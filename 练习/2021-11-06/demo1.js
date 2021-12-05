const getUser = () => {
  return new Promise((resolve, reject) => {
   
      //  throw new Error('错误')
      hd + 1;

  });
};
// 异常处理模块
function exceptionHandling(callback) {
  return callback.then(
    (res) => [res, null],
    (err) => [null,err],
  );
}

async function fun() {
  const [res,err] = await exceptionHandling(getUser());
  if (res) {
    console.log(res);
  }
  if (err) {
    console.log('err');
  }
}
fun();
