import { environment } from 'src/environments/environment';

//const protocol = environment.production ? location.protocol : 'https'
//const njHost = environment.production ? location.hostname : '107.174.186.223.nip.io'
//const njPort = environment.production ? location.port : 443

const protocol = "http"
const njHost = "localhost"
const njPort = "3000"

const njContext = '/api'


let njURL = protocol + "://" + njHost + ":" + njPort + njContext


export {
  njURL
}
