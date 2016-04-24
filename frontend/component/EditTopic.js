import React from 'react';
import jQuery from 'jquery';

import {getTopicDetail, editTopic} from '../lib/client';
import {redirectURL} from '../lib/utils'


export default class EditTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getTopicDetail(this.props.params.id)
      .then(topic => {
        this.setState({topic})
      })
      .catch(err => console.error(err));
  }

  handleChange(name, e) {
    this.state[name] = e.target.value;
  }

  handleSubmit(e) {
    const $bin = jQuery(e.target);
    $bin.button('loading');

    editTopic(this.state.topic._id, this.state.title, this.state.tags, this.state.content)
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
    const topic = this.state.topic;
    if (!topic) {
      return (
        <div>正在加载...</div>
      )
    }

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">编辑主题</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="ipt-title">标题</label>
              <input type="text" className="form-control" id="ipt-title" onChange={this.handleChange.bind(this, 'title')} defaultValue={topic.title} />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="ipt-tags" onChange={this.handleChange.bind(this, 'tags')} defaultValue={topic.tags} />
              <p className="help-block">多个标签使用半角逗号分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="txt-content">内容</label>
              <textarea rows="20" className="form-control" id="txt-content" onChange={this.handleChange.bind(this, 'content')} defaultValue={topic.content}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }

}
