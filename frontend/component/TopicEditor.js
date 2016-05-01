import React from 'react';
import jQuery from 'jquery';

import {getTopicDetail, editTopic} from '../lib/client';
import {redirectURL} from '../lib/utils'


export default class TopicEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.topic;
  }

  handleChange(name, e) {
    this.setState({[name]: e.target.value});
  }

  handleSubmit(e) {
    const $btn = jQuery(e.target);
    $btn.button('loading');
    this.props.onSave(this.state, () => {
      $btn.button('reset');
    });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{this.props.title}</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="ipt-title">标题</label>
              <input type="text" className="form-control" id="ipt-title" value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="ipt-tags" value={this.state.tags} onChange={this.handleChange.bind(this, 'tags')} />
              <p className="help-block">多个标签使用半角逗号分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="txt-content">内容</label>
              <textarea rows="10" className="form-control" id="txt-content" value={this.state.content} onChange={this.handleChange.bind(this, 'content')} ></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }

}
