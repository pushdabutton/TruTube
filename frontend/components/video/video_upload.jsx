import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class VideoUpload extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        debugger
        return(
            <div className="upload-form-container">           
                <form>
                    <input type="file"/>
                </form>
            </div>
        )
    }
}

export default withRouter(VideoUpload)