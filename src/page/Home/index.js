import React from "react";
import "./index.less";

export default () => (
  <div className="layout">
    <header className="header">
      <img
        className="logo"
        src="//gw.alipayobjects.com/zos/basement_prod/7e436777-0464-43ba-a382-d1f873cbfd06/resource/basement_new_prod/%25E5%2589%258D%25E7%25AB%25AF%25E4%25B9%259D%25E9%2583%25A8.gif"
        alt="frontend_9"
      />
      <div className="desc">
        <h1>欢迎来到前端九部</h1>
        <h3>坚持做前端职业教育的指引</h3>
      </div>
    </header>
    <div className="content">
      <div>
        <a href="//github.com/frontend9/fe9-library" className="card">
          → 前往前端九部知识库
        </a>
        <a href="/market" target="_blank" className="card">
          → 前往前端九部工具库
        </a>
        <a href="//github.com/frontend9/fe9-activity/issues" className="card">
          → 前往前端九部活动库
        </a>
        <p className="about">
          <p>
            我们希望做到的事情是前端职业教育的指引，职业教育这件事在国内目前做的并不好，各个行业都不太好，我们的期望，是把我们前端行业的职业教育做好。
          </p>
          <br />
          <p>
            基于这个初心，部分前端从业者开始组织了起来。大多都是年轻的，一线的前端从业者。有着热情，有投入感，对新技术的发展有敏锐的感知。
          </p>
          <br />
          <p>
            我们希望我们每个成员在前端九部的共同目标的付出过程中，有“获得感”。我们深信用心的付出，认认真真的做好我们认为有意义的事情，多年之后，在我们离开我们所做的这些事情之后，仍有很多人的工作，会因我们曾经的成果而发生改变，这是我们行动的推动力。
          </p>
          <br />
          <p>
            所以我们有两件事，一个就是九部组织成员的发展，拉更多的优秀前端从业者成为我们九部的成员，第二个就是我们要整理出贴合时代的，主流的前端技术栈指导手册，让有志于学习前端开发的初学者不再迷茫，少走弯路。
          </p>
          <br />
          <span className="heart">——初心</span>
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
                src="//gw.alicdn.com/tfs/TB1R2lhypzqK1RjSZSgXXcpAVXa-674-896.png"
                alt="联系我"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <footer className="footer">
      <p className="copyright">最终解释权归前端九部所有 @frontend_9</p>
    </footer>
  </div>
);
