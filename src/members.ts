import arrayToTree from 'array-to-tree';
import membersData from './members.json';

const membersTree = {
  name: '成员',
  url: 'https://frontend9.com/',
  value: 'https://frontend9.com/',
  children: arrayToTree(
    membersData.map(
      ([nickname, url, number, parentNick, joinDate, city, company]) => ({
        nickname,
        url,
        number,
        parentNick,
        joinDate,
        city,
        company,
        name: nickname + '(' + number + ')',
        value: url,
      })
    ),
    {
      parentProperty: 'parentNick',
      customID: 'nickname',
    }
  ),
};

export default membersTree;
