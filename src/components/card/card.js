import React, {useEffect, useState} from 'react';

const Card = (props) => {
    // let [Icon, setIcon] = useState(props.name);
    let [Svg, setSvg] = useState(<div/>);
    useEffect( () => {
        const loadIcon = async () => {
            let importedIcon = await import(`../../assets/poker-qr/${props.name}.svg`);
            console.log(importedIcon)
            setSvg(importedIcon.ReactComponent);
        }
      loadIcon();
      
    }, [props.name]);
  
    return <div></div>
  };

  export default Card;