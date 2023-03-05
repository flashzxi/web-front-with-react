import React, { ChangeEvent } from "react"
import styles from "./css/netdisk.module.css"

interface netdiskProps {
}

interface netdiskState {
  textArrow: boolean;
  fileArrow: boolean;
  textValue: string;
}

class NetDisk extends React.Component<netdiskProps, netdiskState> {
  constructor(props: netdiskProps){
    super(props);
    this.state = {
      textArrow: false,
      fileArrow: false,
      textValue: ""
    }
    this.handleTextClick = this.handleTextClick.bind(this)
    this.handleFileClick = this.handleFileClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleTextBlur = this.handleTextBlur.bind(this)
  }
  
  handleTextClick(){
    let textIcon = document.getElementById(styles.textIcon);
    if(textIcon){
      textIcon.style.transform="rotate(90deg)"
    }
    let textArea = document.getElementById(styles.textArea);
    if(textArea){
      textArea.style.height="400px"
    }
    let fileicon = document.getElementById(styles.fileicon);
    if(fileicon){
      fileicon.style.transform="rotate(0deg)"
    }
  }

  handleFileClick(){
    let textIcon = document.getElementById(styles.textIcon);
    if(textIcon){
      textIcon.style.transform="rotate(0deg)"
    }
    let textArea = document.getElementById(styles.textArea);
    if(textArea){
      textArea.style.height="38px"
    }
    let fileicon = document.getElementById(styles.fileicon);
    if(fileicon){
      fileicon.style.transform="rotate(90deg)"
    }
  }

  handleTextBlur(){
    alert(this.state.textValue)
  }

  handleTextChange(event: ChangeEvent<HTMLTextAreaElement>){
    this.setState({
      textValue: event.target.value,
    });
  }

  render(): React.ReactNode{
    return (
      <div className={styles.netdisk}>
        <div className={styles.text} onClick={this.handleTextClick}>
          <div id="textbar" className={styles.hint} >
            <img id={styles.textIcon} className={styles.icon} src="/imgs/icons/arrow-right-circle.svg" alt=""/>
            <div className={styles.hintText}>在下方缓存一句话，换个设备打开此网页</div>
          </div>
          <textarea 
            id={styles.textArea} 
            placeholder="edit me" 
            onBlur={this.handleTextBlur}
            onChange={this.handleTextChange}
          />
        </div>
        <div className='space'></div>
        <div className="file" onClick={this.handleFileClick}>
          <div id="filebar" className={styles.hint} >
            <img id={styles.fileicon} className={styles.icon} src="/imgs/icons/arrow-right-circle.svg" alt=""/>
            <div className={styles.hintText}>跨设备文件传输，仅供个人使用</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NetDisk;