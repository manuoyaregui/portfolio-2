import {
    AiFillInstagram, 
    AiFillLinkedin,
    AiFillGithub
    } from 'react-icons/ai'

function SocialMediaBlock(){
    return (
        <div className="socialMediaBlock">
            <a href='' className="socialMediaButton">
                <AiFillGithub/>
            </a>
            <a href='' className="socialMediaButton">
                <AiFillInstagram/>
            </a>
            <a href='' className="socialMediaButton">
                <AiFillLinkedin/>
            </a>
        </div>
    )
}

export default SocialMediaBlock;