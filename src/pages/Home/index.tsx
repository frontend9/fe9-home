import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/memberList" className={classes.card}>
        → 前端九部 - 九部成员名册
      </Link>

      <a href="//github.com/frontend9/fe9-library" className={classes.card}>
        → 前端九部 - 九部知识库
      </a>
      <a
        href="//github.com/frontend9/fe9-activity/issues"
        className={classes.card}
      >
        → 前端九部 - 九部活动库
      </a>
      <a href="//www.yuque.com/fe9/basic" className={classes.card}>
        → 前端九部 - 行业入门者手册2019
      </a>
      <div className={classes.about}>
        <p>
          我们最终希望做到的事情是前端职业教育的指引，职业教育这件事在国内目前做的并不好，各个行业都不太好，我们的期望，是把我们前端行业的职业教育做好。
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
        <span className={classes.heart}>——初心</span>
      </div>
    </div>
  );
};

export default Home;
