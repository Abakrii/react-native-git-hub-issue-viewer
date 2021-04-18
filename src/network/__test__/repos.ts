import axios from 'axios';

class Repos {
  static all() {
    return axios
      .get('https://github.com/encoredev/encore')
      .then(resp => resp.data);
  }
}

export default Repos;
