import React from 'react'
import styles from './css/ControllerCenter.module.css'

interface ControlHeaderProps{
    avaterurl: string;
    username: string;
}

interface ControlHeaderState{

}

class ControlHeader extends React.Component<ControlHeaderProps, ControlHeaderState>{
    constructor(props:ControlHeaderProps){
        super(props)
    }

    render(){
        return (
            <div className={styles.avater}>
                <div className={styles.pic}>
                    <img src={this.props.avaterurl} alt="" />
                </div>
                <div className={styles.content}>
                    <p>Hello !</p>
                    <h2>{this.props.username}</h2>
                </div>
            </div>
        );
    }
}

export default ControlHeader;