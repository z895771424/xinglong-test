window.onload = function () {
  // 定义选项卡类
  let that;
  class Tab {
    constructor(id) {
      // 获取元素
      that = this;
      this.main = document.querySelector(id);
      // 获取tab栏父元素
      this.tabs = this.main.querySelector('#tabs');
      // 添加tab栏按钮
      this.addBtn = this.main.querySelector('.add-btn');
      // 获取tab内容部分
      this.article = this.main.querySelector('article');
      this.init();
    }
    init() {
      this.updateNode();
      // init 初始化让相关的元素绑定事件
      this.addBtn.onclick = this.addTab;
      for (let i = 0; i < this.span.length; i++) {
        this.span[i].index = i;
        this.span[i].onclick = this.toggleTab;
        this.delBtn[i].onclick = this.removeTab;
        this.tabName[i].ondblclick = this.editTab;
        this.section[i].ondblclick = this.editTab;
      }
    }
    // 获取所有的span和section
    updateNode() {
      // 获取tab栏的每一个元素
      this.span = this.main.querySelectorAll('span');
      // 获取tab栏的元素对应的显示内容
      this.section = this.main.querySelectorAll('section');
      // 获取tab上的删除按钮
      this.delBtn = this.main.querySelectorAll('em');
      // span tab栏名称
      this.tabName = this.main.querySelectorAll('span i');
    }
    // 1 切换功能
    toggleTab() {
      that.clearClass();
      this.className = 'toggle';
      that.section[this.index].className = 'conactive';
    }
    clearClass() {
      for (let i = 0; i < this.span.length; i++) {
        this.span[i].className = '';
        this.section[i].className = '';
      }
    }
    // 2 添加功能
    addTab() {
      // 清除所有li和section的类
      that.clearClass();
      // 1 创建 span 和 section 元素
      const span = '<span class="toggle"><i> 新选项卡 </i><em>❌</em></span > ';
      const section = '<section class="conactive"><i> 新内容 </i></section>';
      // 2 把这两个元素追加到对应的父元素里面
      that.tabs.insertAdjacentHTML('beforeend', span);
      that.article.insertAdjacentHTML('beforeend', section);
      that.init();
    }
    // 3 删除功能
    removeTab(e) {
      // 阻止事件冒泡
      e.stopPropagation();
      let index = this.parentNode.index;
      // remove 方法可以直接删除指定的元素
      that.span[index].remove();
      that.section[index].remove();
      that.init();
      // 当我们删除的不是选中状态的时候原来的span选中状态不变
      console.log(document.querySelector('.toggle'));
      if (document.querySelector('.toggle')) return;
      // 当删除一个span的时候，默认选中前一个
      // 自动调用点击事件，不需要手动触发
      index--;
      that.span[index] && that.span[index].click();
    }
    // 4 修改功能
    editTab() {
      const str = this.innerHTML;
      // 双击禁止选中文字
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.section.empty();
      this.innerHTML = '<input type="text" />';
      const input = this.children[0];
      input.value = str;
      // 文本框里面的文字处于选定状态
      input.select();
      // 当文本框失去焦点
      input.onblur = function () {
        this.parentNode.innerHTML = this.value;
      };
      // 按下回车也可以把文本里面的值给i
      input.onkeyup = function (e) {
        // 手动调用表单失去焦点事件 不需要鼠标离开操作
        e.keyCode === 13 && this.blur();
      };
    }
  }
  const tab = new Tab('main');
};
