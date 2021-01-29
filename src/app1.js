import "./app1.css";
import $ from "jquery";

// 数据相关放到M
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem("n")),
  },
};
// 视图相关放到v
const v = {
  el: null,
  html: `
  <div>
    <div class="output">
      <span id="number">{{n}}</span>
    </div>
    <div class="actions">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="mul2">*2</button>
      <button id="divide2">÷2</button>
    </div>
  </div>
`,
  init(container) {
    v.container = $(container);
    v.render();
  },
  render(container) {
    if (v.el === null) {
      v.el = $(v.html.replace("{{n}}", m.data.n)).appendTo(v.container);
    } else {
      const newEl = $(v.html.replace("{{n}}", m.data.n));
      v.el.replaceWith(newEl);
      v.el = newEl;
    }
  },
};

// 其他都放到C
const c = {
  init(container) {
    v.init(container);
    c.ui = {
      // 寻找重要的元素
      button1: $("#add1"),
      button2: $("#minus1"),
      button3: $("#mul2"),
      button4: $("#divide2"),
      number: $("#number"),
    };
    c.bindEvents();
  },

  bindEvents() {
    v.container.on("click", "#add1", () => {
      m.data.n += 1;
      v.render();
    });
    v.container.on("click", "#minus1", () => {
      m.data.n -= 1;
      v.render();
    });
    v.container.on("click", "#mul2", () => {
      m.data.n *= 2;
      v.render();
    });
    v.container.on("click", "#divide2", () => {
      m.data.n /= 2;
      v.render();
    });
  },
};

export default c;
