import React from "react"
import styles from "./css/netdisk.module.css"


interface netdiskProps {
}

interface nstdiskState {
}

class NetDisk extends React.Component {
  render(): React.ReactNode{
    return (
      <div className="netdisk">
        <div className="text">
          <div id="textbar" className="control">
            <img id="texticon" src="/imgs/icons/arrow-right-circle.svg" alt=""/>
            <p>在下方缓存一句话，换个设备打开此网页</p>
          </div>
          <textarea ></textarea>
        </div>
        <div className='space'></div>
        <div className="file">
          <div id="filebar" className="control" >
            <img id="fileicon" src="/imgs/icons/arrow-right-circle.svg" alt=""/>
            <p>跨设备文件传输，仅供个人使用</p>
          </div>
        </div>
    </div>
    );
  }
}

export default NetDisk;