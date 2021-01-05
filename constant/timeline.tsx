import React, { ReactElement, useState } from "react";
import { MehOutlined, ClockCircleOutlined } from "@ant-design/icons";

// fix ssr support
// https://stackoverflow.com/questions/45350360/react-16-warning-warning-js36-warning-did-not-expect-server-html-to-contain-a
const Player163 = ({ id, text = "" }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {!loading && text && <div style={{ marginBottom: 10 }}>{text}</div>}
      <iframe
        frameBorder={0}
        width="100%"
        height="86"
        style={{ display: loading ? "none" : "block", marginTop: -7 }}
        onLoad={() => {
          setLoading(false);
          console.log("loaded");
        }}
        src={`//music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`}
      ></iframe>
      {loading && (
        <span>
          {/* <img
            width="100"
            height="100"
            src="https://user-images.githubusercontent.com/12481935/103640095-5ed48800-4f8a-11eb-8282-6f1af067d27e.png"
          /> */}
          歌曲加载中 ...
        </span>
      )}
    </div>
  );
};

interface TimelineType {
  [index: string]: {
    time: string;
    text?: string | string[];
    dot?: ReactElement<any>;
    color?: string;
    custom?: any;
  }[];
}

const Timeline: TimelineType = {
  "2021 (新生的一年)": [
    {
      time: "01月05日",
      custom: <Player163 id="1466520418" />,
    },
    {
      time: "01月05日",
      text:
        "内推面试挂了 表现得非常差 ... 估计是没看题目吧，其实类似的经历也有过，但是那会在职所以也没放心上，通过这次其实还是非常深刻的认识到了自己的不足。要说心情，其实毫无波动，目标还是三月份的时候的跳槽。2020 真的很累了, 真的不想上班, 想好好休息一下了。",
    },
    {
      time: "01月04日",
      text: [
        "放假了前几天身体都不是很舒服，开始学习了, 这也是这个博客第一次支持多行的 timeline 哈哈哈哈,我真的很想补充CS相关的知识，可以的话我想当自由开发者。",
      ],
    },
    {
      time: "01月01日",
      text: [
        "豁了一点酒, 跟朋友们聊了聊天，一起跨年去了。哎，然后就看到了黑魔仙猝死了，PDD加班严重有女员工猝死。年轻人真的太不容易了。",
      ],
    },
  ],
  "2020 (终结的一年)": [
    {
      time: "12月31日",
      text:
        "今天离职了，打算新的开始，这件事情看起来像是即兴的。其实已经蓄谋已久了，一直也没什么好的借口说辞职，毕竟舒适区。是时候脱离舒适区了，干点自己喜欢的事情。",
    },
    {
      time: "12月30日",
      text:
        "和同事告别之类的，就如我突然来到这家公司，又突然离开。其实还没走大部分同事都知道要走了，大概世界没有不透风的墙吧 ...",
    },
    {
      time: "12月29日",
      text:
        "PDD买的新手机到了 芜湖，其实我也不是很想买要不是手机坏掉了-.-,而且用的一直都是公司的手机，离职了总要还给公司的",
    },
    {
      time: "10月01日",
      text:
        "不开玩笑真的忙，根本没时间做自己的事情，甚至周六日都要去上班，我几乎没有落下每个周六从今天开始。",
    },
    {
      time: "09月08日",
      text: "最近都很闲 -w- 在弄新的开源库， 希望能搞点东西出来 。。。",
    },
    {
      time: "08月16日",
      text:
        "并没有...睡在公司，我选择了去公司旁边的酒店，他喵的这酒店看软件上面非常高大上实则一般。",
    },
    {
      time: "08月15日",
      text: "今天...难道要在公司睡觉了吗... 发生了一些事情",
    },
    {
      time: "08月01日",
      text: "在慢钱一下就两年过去了，稳定。",
    },
    {
      time: "07月21日",
      text: "线上出问题了=w=",
    },
    {
      time: "04月01日",
      text: "Leetcode还停留在59题 工作忙，还是懒.. ?",
    },
    {
      time: "03月30日",
      text: "开始把博客改成 Next.js 的版本",
    },
    {
      time: "03月29日",
      text: "肺炎还在持续中..今天在听同事的直播..",
    },
    {
      time: "02月04日",
      text: "今年的春节应该会是过得最长的一个春节，因为肺炎的影响",
    },
    {
      time: "02月02日",
      text: "开始学起了swift",
    },
    {
      time: "01月25日",
      text: "今年还能收到来自爸妈的压岁钱 让我有点感慨",
    },
    {
      time: "01月21日",
      text: "又改了一下主题 哎呀",
    },
    {
      time: "01月21日",
      text: "嗨，今天还在上班啊啊啊啊 还有两天 马上新的一年了哦 !",
    },
    {
      time: "01月20日",
      text: "丢四天没背单词了",
    },
    {
      time: "01月19日",
      text: "钱没有 又多了一张浦发银行的银行卡",
    },
    {
      time: "01月17日",
      text: "Leetcode 刷了57题了 目标是100题 冲呀  ！！",
    },
    {
      time: "01月01日",
      text:
        "又开始天天背单词了 丢雷楼某 今年还是许愿脱单 有几个里程碑已经快达到了 奥利给",
    },
  ],
  "2019 (并不开心的一年)": [
    {
      time: "11月02日",
      text: "看了天气之子呢",
    },
    {
      time: "09月xx日",
      text: "去了趟广州玩 呜呜呜手机进水了 修了2k 妈蛋 又是一年的花呗",
    },
    {
      time: "09月18日",
      text: "贵州到咯 ~",
    },
    {
      time: "09月13日",
      text: "GO 重庆 !",
    },
    {
      time: "09月12日",
      text: "大熊猫啊啊啊啊啊",
    },
    {
      time: "09月11日",
      text: "上飞机咯 前往成都 !",
    },
    {
      time: "06月29日",
      text: "又开始锻炼身体了这一次可以持续多久呢..",
    },
    {
      time: "06月06日",
      text: "可恶马云爸爸居然给我支付宝涨额度了 因为我买了电脑吗 ...",
    },
    {
      time: "06月04日",
      text: "拥有了人生的第一台MacBook Pro, 还是希望好好学习吧 ",
    },
    {
      time: "04月15日",
      text: "好像是今天来着拿到了驾照",
    },
    {
      time: "05月08日",
      text: "生日快乐",
    },
    {
      time: "03月19日",
      text: "重新开始吧",
    },
    {
      time: "02月xx日",
      text: "搬了次家来着 还是在老地方附近",
    },
    {
      time: "01月23日",
      text: "偷懒了很久又开始重构了起来 (00点15分)",
    },
    {
      time: "01月12日",
      text: "去惠州开年会啦",
    },
    {
      time: "01月11日",
      text: "开始使用typescript重构ruka",
    },
    {
      time: "01月10日",
      text: "加班结束",
    },
    { time: "01月06日", text: "有点无聊又开始写起了日记" },
  ],
  "2018 (梦开始的地方)": [
    {
      time: "12月19日",
      text: "开始疯狂加班",
    },
    {
      time: "12月17日",
      text: "买的Iphone XsMax到了 新的白条开始了",
    },
    {
      time: "11月09日",
      text: "鹿晗演唱会",
    },
    {
      time: "10月05日",
      dot: <MehOutlined style={{ color: "orange" }} />,
      text: "科目三挂科 ... 法克 ...",
    },
    {
      time: "09月15日",
      text: "Dura更名为Ruka",
    },
    {
      time: "09月10日",
      text: "科目二终于过了",
    },
    {
      time: "08月01日",
      dot: <ClockCircleOutlined />,
      text: "加入深圳市慢钱网络科技有限公司",
    },
    {
      time: "07月27日",
      dot: <MehOutlined style={{ color: "orange" }} />,
      text: "科目二考试失败 留下了没有技术的泪水",
    },
    {
      time: "06月04日",
      color: "green",
      text: "Dura项目启动",
    },
    {
      time: "03月24日",
      text: "前往广州参加大疆校园招聘 (晚点了,变成了去广州玩)",
    },
    {
      time: "04月17日",
      text: "法克耳机白条终于打完了 !! 表示再也不想打白条了 (真香)",
    },
    {
      time: "03月11日",
      text: "第一次和朋友自驾游到大鹏玩",
    },
    {
      time: "02月28日",
      text: "使用Trello作为看板 开始规划自己的目标 开始不停的想办法提高效率",
    },
    {
      time: "02月04日",
      text: "和基友搬入宝安灵芝 开启自己在外面住的生活",
    },
  ],
  "2017 (在校回忆录)": [
    {
      time: "12月16日",
      text: "嗯搬家了",
    },
    {
      time: "08月30日",
      dot: <ClockCircleOutlined style={{ color: "red" }} />,
      text: "中国银行深南支行实习结束",
    },
    {
      time: "07月01日",
      dot: <ClockCircleOutlined />,
      text: "前往中国银行深南支行实习",
    },
    {
      time: "07月15日",
      text: "购买一加三手机 用到眼睛差点瞎掉 发誓一定要买一部Iphone",
    },
    {
      time: "06月11日",
      text: "开始使用Github Issues写博客",
    },
    {
      time: "01月26日",
      text:
        "加入人生的第一个Orgnazation: Balde / 发起了人生的第一个Pull Request 到Blade项目",
    },
  ],
  "2016 (在校回忆录)": [
    {
      time: "12月xx日",
      text: "看了你的名字",
    },
    {
      time: "10月22日",
      text: "博客启动 (这是能找到的最早的一条有效日期，虽然之前也在写博客)",
    },
    {
      time: "04月17日",
      text: "购买了人生的第一条索尼耳机 充值一波信仰 打了人生第一次白条",
    },
    {
      time: "03月xx日",
      dot: <MehOutlined style={{ color: "orange" }} />,
      text: "胃病住院了 原因: 总是做嗨到最晚的男人",
    },
  ],

  "2015 (在校回忆录)": [
    { time: "09月16日", text: "青岛旅游五天" },
    {
      time: "08月18日",
      text: "广州一日游",
    },
    {
      time: "04月30日",
      text: "拥有了自己的Acer笔记本,发誓要好好学习,结果打游戏打了个爽",
    },
    {
      time: "05月17日",
      text: "加入Github",
    },
  ],
  "2014 (在校回忆录)": [
    {
      time: "xx月xx日",
      text: "反正是一个暑假 加入工作室",
    },
  ],
};

export default Timeline;
