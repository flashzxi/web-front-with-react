import React from "react";
import Item from "./Item";
import ControlHeader from "./ControlHeader";

import styles from './css/ControllerCenter.module.css'

interface ControllerCenterProps{
}

interface ControllerState{
    itemList: {
        icon: string,
        text: string,
        url?: string
    }[]
}

class ControllerCenter extends React.Component<ControllerCenterProps, ControllerState>{
    constructor(props: ControllerCenterProps){
        super(props);
        let itemList: {icon: string, text: string, url?:string}[] = [{
                icon: './imgs/icons/email.svg',
                text: 'E-Mail'
            },
            {
                icon: './imgs/icons/netdisk.svg',
                text: 'Net-Disk'
            },
            {
                icon: './imgs/icons/PPT.svg',
                text: 'PPT'
            },
            {
                icon: './imgs/icons/blog.svg',
                text: 'Blogs'
            },
            {
                icon: './imgs/icons/comment.svg',
                text: 'Comments'
            },    

        ];
        
        this.state = {
            itemList: itemList,
        }
        
    }

    render(): React.ReactNode {
        // console.log(this.state.itemList)
        let subProject = this.state.itemList.map((item)=>
            <li key={item.text}><Item icon={item.icon} text={item.text} /></li>
        )

        return (
            <div className={styles.nav}>
                <ControlHeader avaterurl='.\imgs\avater512.png' username='FlashZXi'/>
                <div className={styles.line}></div>
                <div className={styles.menu}>
                    <div className={styles.title}>
                        {"Menu"}
                    </div>
                    {subProject}
                </div>
            </div>
        );
    }
}

export default ControllerCenter;