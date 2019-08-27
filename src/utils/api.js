import axios from 'axios';

export function getPosts() {
  const x=axios.get('http://localhost:85/produ3/web/app_dev.php/listadoJson/empresa');
  console.log(x);
  return x;
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: 'http://localhost:85/sipm_v2/web/app_dev.php/listado/C001T_EVENTO',
    data: {
      title,
      body,
    }
  })
}
