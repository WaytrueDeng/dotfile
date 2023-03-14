local ls = require("luasnip")
local s = ls.snippet
local sn = ls.snippet_node
local t = ls.text_node
local i = ls.insert_node
local f = ls.function_node
local d = ls.dynamic_node
local fmt = require("luasnip.extras.fmt").fmt
local fmta = require("luasnip.extras.fmt").fmta
local rep = require("luasnip.extras").rep

return{
s({trig="<qn", dscr="expand markdown yaml front metter",snippetType="autosnippet"},
  fmt( -- The snippet code actually looks like the equation environment it produces.
    [===[
<div class="QnA"> 
  <div class ="Q">
  {}
  </div>
  <div class = "A">
  {}
  </div>
</div>
    ]===],
    -- The insert node is placed in the <> angle brackets
    {
      i(1),
      i(2)},
    -- This is where I specify that angle brackets are used as node positions.
    { delimiters = "{}" }
  )
),

}
