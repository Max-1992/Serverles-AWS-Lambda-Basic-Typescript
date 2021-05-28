// import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';



export default {
  handler: `${handlerPath(__dirname)}/getCityInfo.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-city/{city}',
        cors: true,
        // request: {
        //   schema: {
        //     'application/json': schema
        //   }
        // }
      }
    }
  ]
}
