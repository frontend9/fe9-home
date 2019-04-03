import React from 'react'
import './index.less'
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/tree';
export default class MemberList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.initEcharts();
  }

  initEcharts = () => {
    let myChart = echarts.init(document.getElementById('memberTree'))

    let roots = []
    let members = []
    window.membersArray.map(
      ([nickname, url, number, parentNick, joinDate, city, company]) => {
        members.push({
          nickname,
          url,
          number,
          parentNick,
          joinDate,
          city,
          company,
          children: [],

          name: nickname + '(' + number + ')',
          value: url
        })
      }
    )

    function insertToTree(member, nodes, memberIndex) {
      let found = false
      nodes.map(node => {
        if (node.nickname === member.parentNick) {
          node.children.push(member)
          found = true
          members.splice(memberIndex, 1)
        }
      })
      if (found === false) {
        nodes.map(node => {
          if (insertToTree(member, node.children, memberIndex)) {
            found = true
          }
        })
      }
      return found
    }

    for (let i = 0; i < members.length; i++) {
      if (members[i].parentNick === '-') {
        roots.push(members[i])
        members.splice(i, 1)
        i--
      }
    }

    while (members.length) {
      for (let i = 0; i < members.length; i++) {
        if (insertToTree(members[i], roots, i)) {
          break
        }
      }
    }

    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: '{c0}'
      },
      series: [
        {
          type: 'tree',

          name: 'tree1',

          data: [{ name: '成员', children: roots }],

          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '7%',

          symbol: 'roundRect',
          symbolSize: 7,

          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle'
            }
          },

          initialTreeDepth: -1,
          expandAndCollapse: true,

          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    })
    myChart.on('click', 'series', params => {
      window.open(params.data.url)
    })
  }
  render() {
    return (
      <div className="layout">
        <header className="header">
          <img
            className="logo"
            src="//gw.alipayobjects.com/zos/basement_prod/7e436777-0464-43ba-a382-d1f873cbfd06/resource/basement_new_prod/%25E5%2589%258D%25E7%25AB%25AF%25E4%25B9%259D%25E9%2583%25A8.gif"
            alt="frontend_9"
          />
          <div className="desc">
            <a href="/" className="homeLink">
              <h1>欢迎来到前端九部</h1>
              <h3>这里是一群喜欢分享交流的前端码农</h3>
            </a>
          </div>
        </header>
        <div className="content">
          <div>
            <p className="about" id="memberTree" />
            <ul className="btns">
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
                  className="contact"
                >
                  加入我们
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer">
          <p className="copyright">最终解释权归前端九部所有 @frontend_9</p>
        </footer>
      </div>
    )
  }
}
