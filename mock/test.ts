import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  // GET POST 可省略
  'POST /api/testdata': async (req: Request, res: Response) => {
    await waitTime(2000); 
    var myHeaders = req.headers;
    console.log("myHeaders", myHeaders);
    var token = req.headers['token'];
    console.log("tokenx",token );
    res.send({
        success: true,
        data: [{id:31},{id:32},{id:33},{id:34}],
    })
  }

};

