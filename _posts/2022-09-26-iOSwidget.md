---
layout: post
title: iOS锁屏组件开发教程
author: huhansome
date: 2022-09-26 15:38:00 +0800
categories: ['杂谈']
tags: [杂谈]
pin: false
comments: true
description: iOS16给用户带来感知最大的变化就是锁屏小组件，我们也计划为App添加此功能。 此文做一个学习记录，希望同时也能帮助到有同样需求的人
keywords: iOS, 桌面小组件, 锁屏小组件, iOS锁屏小组件开发
---

没有开发过watchOS App的小伙伴可能对 复杂功能(Complication) 这个概念很疑惑。 我们可以简单理解为 复杂功能 就是Watch表盘上的小组件，只不过它的名字叫做复杂功能。

在Watch0S8(对应iOS15) 及之前，复杂功能是需要在WatchApp中单独编写的。 iOS16苹果把此功能整合到了Widgetkit中，未来我们只需要编写一套代码就可以同时支持 iOS的锁屏小组件 和watchOS 的复杂功能

为iOS添加锁屏小组件本质就是我们为新的WigetFamily 编写代码，和编写桌面小组件在流程上是一致的。其中iOS16新增支持3种WigetFamily

`WidgetFamily.accessoryCircular`  `WidgetFamily.accessoryRectangular`
`WidgetFamily.accessoryInline`
`WidgetFamily.accessoryCorner` 	只支持 watchOS