var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title:
      '<p style="color: dodgerblue">如果 React 元素之前已经在 <code class="gatsby-code-text">container</code> 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。</p>',
  });
});

module.exports = router;
