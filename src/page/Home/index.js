import React from "react";
import "./index.less";

export default () => (
  <div className="layout">
    <header className="header">
      <img
        className="logo"
        src="https://gw.alipayobjects.com/zos/basement_prod/7e436777-0464-43ba-a382-d1f873cbfd06/resource/basement_new_prod/%25E5%2589%258D%25E7%25AB%25AF%25E4%25B9%259D%25E9%2583%25A8.gif"
        alt="frontend_9"
      />
      <div className="desc">
        <h1>欢迎来到前端九部</h1>
        <h3>前端九部的由来等等-待完善</h3>
      </div>
    </header>
    <div className="content">
      <div>
        <a href="//github.com/frontend9/fe9-library" className="card">
          → 前往前端九部知识库
        </a>
        <a href="//github.com/frontend9/fe9-market" className="card">
          → 前往前端九部工具库
        </a>
        <a href="//github.com/frontend9/fe9-activity/issues" className="card">
          → 前往前端九部活动库
        </a>
        <p>
          我们是前端九部，前端九部成立于2018年的某一天，由玉伯大大赐名前端九部。寓意来自攻壳机动队的公安九课，哈哈。
          <br />
          —— 待完善
          <br />
          —— 待完善
          <br />
          —— 待完善
          <br />
          —— 待完善
          <br />
          —— 待完善
        </p>
        <ul className="btns">
          <li>
            <a href="//zhuanlan.zhihu.com/c_1005849602699907072">知乎</a>
          </li>
          <li>
            <a href="//github.com/frontend9">Github</a>
          </li>
          <li>
            <a href="//github.com/frontend9/fe9-library/blob/master/MEMBERS.md">
              编号成员
            </a>
          </li>
          <li>
            <a href="javascrpt:;" className="contact">
              加入我们
              <img
                src="//img.alicdn.com/tfs/TB1CUUrtAvoK1RjSZPfXXXPKFXa-674-896.jpg"
                alt="联系我"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <footer className="footer">最终解释权归前端九部所有 @frontend_9</footer>
  </div>
);
