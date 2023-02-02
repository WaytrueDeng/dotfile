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
s({trig="title", dscr="expand markdown title"},
  fmt( -- The snippet code actually looks like the equation environment it produces.
    [[
    ---
    title:  <>
    --- 
    
    ### Contents
    - <>
    ]],
    -- The insert node is placed in the <> angle brackets
    { i(1),
      i(2)},
    -- This is where I specify that angle brackets are used as node positions.
    { delimiters = "<>" }
  )
),
s({trig="<[",snippetType="autosnippet"},
  fmta(
  [[[<>](/<>)]],

    {
      i(1),
      rep(1),  -- this node repeats insert node i(1)
    }
  )
),

s({trig="<img",snippetType="autosnippet"},
  fmta(
  [[![<>](/note-images/<>)]],

    {
      i(1),
      rep(1),  -- this node repeats insert node i(1)
    }
  )
),
s({trig="<re",snippetType="autosnippet"},
  fmta(
  [[
  ### References
  - <>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<ke",snippettype="autosnippet"},
  fmta(
  [[
  ### keywords
  - <>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<co",snippettype="autosnippet"},
  fmta(
  [[
  ### Contents
  - <>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<mark",snippettype="autosnippet"},
  fmta(
  [[
  <<mark>><><</mark>>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<fn",snippettype="autosnippet"},
  fmta(
  [[
  [^<>]
  ]],

    {
      i(1),
    }
  )
),
s({trig="<mn",snippetType="autosnippet"},
  fmta(
  [[
  ### Mnmonic
  - <>
  ]],

    {
      i(1),
    }
  )
),

s({trig="<log",snippetType="autosnippet"},
  fmta(
  [[
  ### Log
  - <>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<an",snippetType="autosnippet"},
  fmta(
  [[
  <<span class="answer">><><</span>>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<bre",snippetType="autosnippet"},
  fmta(
  [[
  <<span class="bred">><><</span>>
  ]],

    {
      i(1),
    }
  )
),

s({trig="<bor",snippetType="autosnippet"},
  fmta(
  [[
  <<span class="born">><><</span>>
  ]],

    {
      i(1),
    }
  )
),

s({trig="<bgr",snippetType="autosnippet"},
  fmta(
  [[
  <<span class="bgrn">><><</span>>
  ]],

    {
      i(1),
    }
  )
),

s({trig="<svg",snippetType="autosnippet"},
  fmta(
  [[
  <<object type="image/svg+xml" style="width:100%;" data="/note-images/<>">><</object>>
  ]],

    {
      i(1),
    }
  )
),
s({trig="<me",snippetType="autosnippet"},
  fmta(
  [[
<<div class="mermaid">><><</div>>
  ]],

    {
      i(1),
    }
  )
)

}
