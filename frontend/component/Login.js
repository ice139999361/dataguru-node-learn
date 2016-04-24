import React from 'react';
import jQuery from 'jquery';

import {login} from '../lib/client';
import {redirectURL} from '../lib/utils';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(name, e) {
    this.state[name] = e.target.value;
  }

  handleLogin(e) {
    const $bin = jQuery(e.target);
    $bin.button('loading');
    login(this.state.name, this.state.password)
      .then(ret => {
        $bin.button('reset');
        alert('登录成功');
        redirectURL('/')
      })
      .catch(err => {
        $bin.button('reset');
        alert(err)
      })
  }

  render() {
    return (
      <div style={{width:400, margin: 'auto'}}>
        <div className="panel panel-primary">
          <div className="panel-heading">登录</div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="ipt-name">用户名</label>
                <input onChange={this.handleChange.bind(this, 'name')} className="form-control" id="ipt-name" placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="ipt-password">密码</label>
                <input onChange={this.handleChange.bind(this, 'password')} type="password" className="form-control" id="ipt-password" placeholder="" />
              </div>
              <button onClick={this.handleLogin.bind(this)} type="button" className="btn btn-primary">登录</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
