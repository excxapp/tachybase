<h1 align="center" style="border-bottom: none">
    <div>
        <a style="color:#36f" href="https://www.tachybase.com">
            <img src="https://tachybase-1321007335.cos.ap-shanghai.myqcloud.com/3733d6bd0a3376a93ba6180b32194369.png" width="80" />
            <br>
            灵矶
        </a>
    </div>
</h1>

<br>



<p align="center">
<span style="color:red; font-weight:bold;">灵矶还处于 alpha 阶段，用在生产中请谨慎，碰到任何问题可以联系我们处理</span>
<br>
灵矶是一个灵活多变的应用系统，应用开发者可以基于灵矶做出丰富应用逻辑，而核心开发者可以聚焦于关键模块的稳定性和对不同环境的适配。
</p>

# 其他语言

[[English Version](README.EN-US.md)][中文版本]

# 简介

我们从内到外设计了三层结构，分别是内核层、模块层和插件层，内核层提供最最为核心的插件机制、统一的接口，模块层用于实现特定用途的应用，例如可以使用灵矶来
制作一个低代码平台，或者使用灵矶来做一个服务编排工具，插件层用来提供更多的选择，例如模块层设计了认证机制，那么可以在插件层实现不同认证来源作为插件。

# 路线图

这里提供一个大图，具体的开发计划会与相关应用模板一并在春节前公布。

- [x] 内核：内核 API
- [ ] 内核：消息机制
- [ ] 内核：模块 API
- [x] 模块：工作流
- [x] 模块：无代码能力
- [ ] 模块：云函数
- [ ] 模块：云组件
- [ ] 模块：消息队列
- [ ] 模块：定时任务
- [x] 插件：工作流 - 审批
- [ ] 插件：工作流 - 数据模板



# 应用模板

[Demo 应用](https://demos.tachybase.com/admin/628sp6la1mw) 账号：`tachybase` 密码：`!Admin123.`
正在制作中，预计春节前上线，目前开放测试，欢迎联系

# 快速开始

```bash 
pnpm install
pnpm tachybase install
pnpm dev
```

默认的账号为：`tachybase`，默认密码为 `!Admin123.`

# 开源许可证

<p>
此项目在 <a href="./LICENSE">Apache 2.0</a> 下.
</p>

# 贡献

我们不限制贡献的方式，积极使用该项目，向我们回馈就是最大的贡献。

- 使用
- 提建议
- 提合并请求
