import * as React from 'react';
import classes from './index.module.scss';

const MainLayout: React.FC = props => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="//gw.alipayobjects.com/zos/basement_prod/7e436777-0464-43ba-a382-d1f873cbfd06/resource/basement_new_prod/%25E5%2589%258D%25E7%25AB%25AF%25E4%25B9%259D%25E9%2583%25A8.gif"
          alt="frontend_9"
        />
        <div className={classes.desc}>
          <a href="/" className={classes.homeLink}>
            <h1>欢迎来到前端九部</h1>
            <h3>这里是一群喜欢分享交流的前端码农</h3>
          </a>
        </div>
      </header>
      <div>{props.children}</div>

      <ul className={classes.btns}>
        <li>
          <a href="//zhuanlan.zhihu.com/c_1005849602699907072">知乎</a>
        </li>
        <li>
          <a href="//github.com/frontend9">Github</a>
        </li>
        <li>
          <a href="//github.com/frontend9/fe9-library/blob/master/MEMBERS.md">
            成员名单
          </a>
        </li>
        <li>
          <a
            href="//github.com/frontend9/fe9-library/blob/master/JOINUS.md"
            className={classes.contact}
          >
            加入我们
          </a>
        </li>
      </ul>

      <footer className={classes.footer}>
        <p className={classes.copyright}>
          最终解释权归前端九部所有 @frontend_9
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
