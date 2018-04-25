# getTotalPath
根据提供的子节点和树形结构的数据集，返回该子节点的全路径



## 用法

```javascript

let data = [
  {
    classcode:1,
    children: [
      {
        classcode:101,
        children: [
          {
            classcode:101001,
          }
        ]
      }
    ]
  },
  {
    classcode:2,
    children: [
      {
        classcode:201,
        children: [
          {
            classcode:201001,
          }
        ]
      }
    ]
  }
]

var result = getTotalPath(data,101001,classCode)

// 结果
'1,101,101001'
```