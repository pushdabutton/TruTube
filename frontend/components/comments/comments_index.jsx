import React from 'react';
import CommentIndexItem from './comment_index_item';
import {fetchComments} from '../../actions/comment_actions'


class CommentIndex extends React.Component {
    componentDidMount(){
        this.props.fetchComments(this.props.props.match.params.videoId)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.props.match.params.videoId !== this.props.props.match.params.videoId) {
            this.props.fetchComments(this.props.props.match.params.videoId)
        }
    }



    render() {
        let mode = this.props.ui.darkmode ? 'dark' : 'light'
        const comments = this.props.comments.map(comment => {
            return (
                <CommentIndexItem key={comment.id} comment={comment} video={this.props.video} />
            )
        })

        return(
            <div className={`${mode}-comments`}>
                <div className="total-comments">
                    {comments.length} comments
                </div>
                    <br/>
                <ul>
                    {comments}
                    <br/>
                </ul>
            </div>
        )

    }
}


export default CommentIndex;