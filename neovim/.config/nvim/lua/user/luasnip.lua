
local snip_status_ok, luasnip = pcall(require, "luasnip")
if not snip_status_ok then
  return
end



require("luasnip/loaders/from_vscode").lazy_load()
require("luasnip.loaders.from_lua").lazy_load({paths = "~/.config/nvim/snippets"})
local check_backspace = function()
  local col = vim.fn.col "." - 1
  return col == 0 or vim.fn.getline("."):sub(col, col):match "%s"
end

-- Somewhere in your Neovim startup, e.g. init.lua
require("luasnip").config.set_config({ -- Setting LuaSnip config

  -- Enable autotriggered snippets
  enable_autosnippets = true,

  -- Use Tab (or some other key if you prefer) to trigger visual selection
  store_selection_keys = "<Tab>",
  update_events = 'TextChanged,TextChangedI'
})

require("luasnip").filetype_extend("jsx", {"html"})
