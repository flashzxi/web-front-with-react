import React from "react"

import styles from './css/ControllerCenter.module.css'

interface ItemProps{
    icon: string,
    text: string,
    url?: string
}

interface ItemState{

}

class Item extends React.Component<ItemProps, ItemState>{
    constructor(props: ItemProps){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(): void{
        alert(this.props.text + " isClicked")
    }

    render(): React.ReactNode {
        return (
            <div onClick={this.handleClick} className={styles.item}>
                <div className={styles.icon}>
                    <img src={this.props.icon} alt={this.props.text}/>
                </div>
                <div className={styles.discription}>{this.props.text}</div>
                <div className={styles.light}></div>
            </div>
        );
    }
}

export default Item