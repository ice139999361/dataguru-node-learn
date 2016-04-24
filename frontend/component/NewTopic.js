import React from 'react';
import jQuery from 'jquery';

import {addTopic} from '../lib/client';
import {redirectURL} from '../lib/utils'


export default class NewTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(name, e) {
    this.state[name] = e.target.value;
  }

  handleSubmit(e) {
    const $bin = jQuery(e.target);
    $bin.button('loading');

    addTopic(this.state.title, this.state.tags, this.state.content)
      .then(topic => {
        $bin.button('reset');
        redirectURL(`/topic/${topic._id}`)
      })
      .catch(err => {
        $bin.button('reset');
        alert(err);
      })
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">发表新主题</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="ipt-title">标题</label>
              <input type="text" className="form-control" id="ipt-title" onChange={this.handleChange.bind(this, 'title')} />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="ipt-tags" onChange={this.handleChange.bind(this, 'tags')} />
              <p className="help-block">多个标签使用半角逗号分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="txt-content">内容</label>
              <textarea rows="20" className="form-control" id="txt-content" onChange={this.handleChange.bind(this, 'content')}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }

}
