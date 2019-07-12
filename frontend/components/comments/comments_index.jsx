import React from 'react';
import CommentIndexItem from './comment_index_item';
import randomize from '../../selectors/random_selector'


class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: "",
        }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.cancelComment = this.cancelComment.bind(this)

        this.color1 = "#4285F4"
        this.color2 = "#0F9D58"
        this.color3 = "#DB4437"
        this.color4 = "#F4B400"
        this.color5 = "#4285F4"
        this.color6 = "#0F9D58"
        this.color7 = "#DB4437"

        this.colors = [this.color1, this.color2, this.color3, this.color4, this.color5, this.color6, this.color7]
        this.proColor = randomize(this.colors)[0]
    }
    componentDidMount(){
        this.props.fetchComments(this.props.props.match.params.videoId)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.props.match.params !== this.props.props.match.params) {
            this.props.fetchComments(this.props.props.match.params.videoId)
        }
    }

    update(e){
        this.setState({commentText: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let videoId = parseInt(this.props.props.match.params.videoId)
        let commentObj = {body: this.state.commentText,
                       video_id: videoId}

        this.props.createComment(commentObj);
        this.setState({commentText: ""})
    }

    focusComment(){
        let box = document.getElementById("comment-actions-box")
        debugger
        if (Object.values(box.classList).includes("hidden")){    
            box.classList.toggle("hidden")
        }
    }

    cancelComment() {
        let box = document.getElementById("comment-actions-box")

        box.classList.toggle("hidden")

    }

    render() {
        let photo;
        if (this.props.user.photo) {
            photo = <img src={this.props.user.photo} />
        } else {
            photo = <i className="fas fa-user-circle"></i>
        }

        let mode = this.props.ui.darkmode ? 'dark' : 'light'
        const comments = this.props.comments.map((comment, idx) => {
            return (
                <>
                    <CommentIndexItem key={idx} colors={this.colors} comment={comment} video={this.props.video} user={this.props.user} likeComment={this.props.likeComment}/>
                    <br/>
                </>
            )
        })

        return(
            <div className={`${mode}-comments`}>
                <div className="total-comments">
                    {comments.length} comments
                </div>
                    <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="comment-form">
                        <p style={{ color: this.proColor }}>{photo}</p>
                        <input className="comment-form-bar" type="text" onFocus={this.focusComment} value={this.state.commentText} onChange={this.update} placeholder="Add a pulic comment"/>
                    </div>
                    <br/>
                    <div id="comment-actions-box" className="comment-actions hidden">
                        <input className="comment-cancel" type="button" onClick={this.cancelComment}  value="CANCEL" />
                        <input className="comment-submit" type="submit" value="COMMENT"/>

                    </div>
                </form>
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