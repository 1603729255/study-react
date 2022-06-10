# BrowserRouter和HashRouter的区别
  1底层和表现
  BrowserRouter用的是H5的history API
  HashRouter 是url的哈希值#
  2刷新后对state参数的影响
  BrowserRouter没有影响 不会丢失 因为保存在history对象中
  HashRouter 会丢失state参数！！！
  HashRouter 有时可解决一些路径问题
# redux