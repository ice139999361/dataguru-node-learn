import React from 'react';
import jQuery from 'jquery';

import {getTopicDetail, updateTopic} from '../lib/client';
import {redirectURL} from '../lib/utils';
import TopicEditor from './TopicEditor';


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
  }

  render() {
    if (!this.state.topic) {
      return (
        <h3>正在加载...</h3>
      )
    }

    return (
      <TopicEditor
        title={`编辑 ${this.state.topic.title}`}
        topic={this.state.topic}
        onSave={(topic, done) => {
          updateTopic(this.props.params.id, topic.title, topic.tags, topic.content)
            .then(ret => {
              done();
              redirectURL(`/topic/${ret._id}`);
            })
            .catch(err => {
              done();
              alert(err);
            })
        }}
      />
    )
  }

}
