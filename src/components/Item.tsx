import React from "react"
import { NavLink } from "react-router-dom";

import styles from './css/ControllerCenter.module.css'

interface ItemProps{
    icon: string,
    text: string,
    currentPage: string,
    url?: string
    handleClick: (currentPage: string)=>void
}

interface ItemState{
    
}

class Item extends React.Component<ItemProps, ItemState>{
    constructor(props: ItemProps){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(): void{
        this.props.handleClick(this.props.text)
    }

    render(): React.ReactNode {
        let chooseStyle={
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "5px",
        }
        return (
            <NavLink to={this.props.url? this.props.url: "error"} className={styles.navlink}
                style={({ isActive }) => ({
                    backgroundColor: "red",
                    textDecoration:'none',
                })}
                onClick={this.handleClick} 
            >
                <div className={styles.item} 
                    style={(this.props.currentPage === this.props.text)?chooseStyle: undefined}
                >
                    <div className={styles.icon} >
                        <img src={this.props.icon} alt={this.props.text}/>
                    </div>
                    <div className={styles.discription}>{this.props.text}</div>
                    <div className={styles.light}></div>
                </div>
            </NavLink>
        );
    }
}

export default Item