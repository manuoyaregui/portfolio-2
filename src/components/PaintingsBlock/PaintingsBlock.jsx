import Painting from "../Painting/Painting";
import images from '../../assets/images.json'

const imagesDivided = divideArrayIntoThreeParts(images.images)

function PaintingBlocks(){
    
    return(
        <>
        <div className="paintingsColumn c-1">
            {
            imagesDivided[0].map( (image, index) => ( 
                    <Painting key={index} imageName={image} />
                )
            )
            }

        </div>
        <div className="paintingsColumn c-2">
            {
            imagesDivided[1].map( (image, index) => (
                index%2 == 0 && 
                    <Painting key={index} imageName={image} />
                )
            )
            }

        </div>
        <div className="paintingsColumn c-3">
            {
            imagesDivided[2].map( (image, index) => (
                index%3 == 0 && 
                    <Painting key={index} imageName={image} />
                )
            )
            }

        </div>
            {/* <div className="paintingsColumn">
                <Painting imageName={} />
                <Painting imageName={} />
            </div>
            <div className="paintingsColumn">
                <Painting imageName={} />
                <Painting imageName={} />
            </div>
            <div className="paintingsColumn">
                <Painting imageName={} />
                <Painting imageName={} />
            </div> */}
        </>
    )
}

function divideArrayIntoThreeParts(array) {
    const partSize = Math.ceil(array.length / 3);
    const dividedArray = [];
  
    for (let i = 0; i < array.length; i += partSize) {
      dividedArray.push(array.slice(i, i + partSize));
    }
  
    return dividedArray;
  }
  
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dividedArrays = divideArrayIntoThreeParts(originalArray);

export default PaintingBlocks;