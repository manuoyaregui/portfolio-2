import './Painting.css'

function Painting({imageName}){
    const imagepath = './artImages/' + imageName + '.jpg';
    return (
        <img 
            className='painting' 
            src={imagepath}
            alt={imagepath}     
            />
    )
}



export default Painting;