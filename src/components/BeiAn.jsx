import styles from './css/index.module.css'

export default function BeiAn(){
  return (
    <a href="https://beian.miit.gov.cn" className={styles.bzoj}>
      <div className="bzoj">
        <img className={styles.fig} src="./imgs/备案图标.png" alt='备案'/>
        <div className={styles.id}>皖ICP备2021000828号-1</div>
      </div>
    </a>
  );
}