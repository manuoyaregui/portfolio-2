import './ProyectCard.css'
import { AiFillGithub} from 'react-icons/ai';
import {FaExternalLinkSquareAlt} from 'react-icons/fa'



const imageFolder = './projectImages/';

function ProyectCard(
    {title, description, badges, repoUrl, websiteUrl}
    ){
    const imageRoute = imageFolder + title + '.jpg';

    return(
        <div className="proyectCard">
            <img className="proyectImgContainer" src={imageRoute} alt={title}/>
            <div className="infoBlock">
                <div className="projectTitle">{title}</div>
                <div className="projectDescription">
                    {description}
                </div>

                {
                badges ? (
                    <div className="badges">
                        {
                            badges?.map((badge,index) =>(
                                <div key={index} className="badge">{badge}</div>
                            ))
                        }
                    </div>
                ):null 
                }
                
                {
                repoUrl? (
                    <a href={repoUrl}
                    target='_blank'
                    className="socialMediaButton">
                        <AiFillGithub/>
                    </a>
                ):null
                }    
                {
                websiteUrl? (
                    <a href={websiteUrl} 
                    target='_blank'a
                    className="socialMediaButton">
                        <FaExternalLinkSquareAlt/>
                    </a>
                ):null}
        
            </div>

        </div>
    )
}

export default ProyectCard;