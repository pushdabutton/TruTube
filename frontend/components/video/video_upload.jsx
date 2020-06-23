import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class VideoUpload extends React.Component {
    constructor(props) {
        super(props)

        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            title: "",
            description: "",
        }
    }

    handleFile(e) {
        const reader = new FileReader();
        
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {

            this.setState({ imageUrl: "", imageFile: null });
        }
    }
    

    handleSubmit() {
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);


        if (this.state.imageFile) {
            formData.append('project[image]', this.state.imageFile);
        }
        const id = this.state.id;
        this.props.props.updateProject(formData, id);

    }


    render() {

        return(
            <div className="upload-form-container">           
                <form className="upload-form-box">
                    <input type="file" onChange={this.handleFile}/>
                    <i class="fas fa-cloud-upload-alt" onClick={this.handleSubmit}></i>
                </form>
            </div>
        )
    }
}

export default withRouter(VideoUpload)