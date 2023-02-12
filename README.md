TypeScript React AntDesign Message Destroy Before Showing New Message Demo
=================================

这可能是antd的一个bug。

如果调用了`message.destroy()`后再调用`message.info`等方法，第一次点击后，`message.info`不会生效。之后再点击就正常。

推测可能跟`destroy`的执行顺序有关。

一个解决方法是把`message.info`用`setTimeout`包一下。

```
npm install
npm start
```

It will open page on browser automatically.
