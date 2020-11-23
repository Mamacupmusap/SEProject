import React, { Component} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import profileservice from '../ProfileService';

class Upload extends Component {

    state = {
        file: ""
    }

    handleFile(e:any){

        let file = e.target.files[0]
        this.setState({file: file})
    }

    handleUpload(e:any){

        const file = this.state.file
        const profile_pic = new FormData()
        profile_pic.append('image',file)
        profileservice.updateProfileimage(profile_pic)
        .then(ress=>{
          profileservice.updateurlimage(ress.data.display_url,ress.data.delete_url,localStorage.UserId,localStorage.Token)
        })
    }

    render() {
        return (
            
                <form id="uploadpic">
                    <div>
                        <input type="file" className="ChooseProfile_pic" 
                        onChange={(e)=>this.handleFile(e)} style={{marginLeft:50}}/>
                    </div>
                    <br />
                    <Button id='buttonUploadprofile' onClick={(e)=>this.handleUpload(e)}>Upload</Button>
                </form>
            
        );
    }
}

export default Upload;