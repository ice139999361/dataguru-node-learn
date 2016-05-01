import React from 'react';
import {Link} from 'react-router';
import 'highlight.js/styles/github.css';

import CommentEditor from './CommentEditor';
import {getTopicDetail, addComment, deleteComment} from '../lib/client';
import {renderMarkdown} from '../lib/utils';

export default class TopicDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    getTopicDetail(this.props.params.id)
      .then(topic => {
        topic.html = renderMarkdown(topic.content);
        if (topic.comments) {
          for (const item of topic.comments) {
            item.html = renderMarkdown(item.content);
          }
        }

        this.setState({topic})
      })
      .catch(err => console.error(err));
  }

  render() {
    const topic = this.state.topic;
    if (!topic) {
      return (
        <div>正在加载...</div>
      )
    }

    return (
      <div>
        <h2>{topic.title}</h2>
        <Link to={`/topic/${topic._id}/edit`} className="btn btn-primary">编辑</Link>
        <hr />
        <p>标签：{topic.tags.join(', ')}</p>
        <section dangerouslySetInnerHTML={{__html: topic.html }}></section>
        <CommentEditor
          title="发表评论"
          onSave={(comment, done) => {
            addComment(this.state.topic._id, comment.content)
              .then(() => {
                done();
                this.refresh();
              })
              .catch(err => {
                console.log(err);
                done();
              })
          }}
        />
        <ul className="list-group">
          {topic.comments.map((item, i) => {
            return (
              <li className="list-group-item" key={i}>
                {item.authorId}于{item.createAt}说:
                <br />
                <p dangerouslySetInnerHTML={{__html: item.html}}></p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
