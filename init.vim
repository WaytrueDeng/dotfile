set relativenumber
set clipboard=unnamed
set scrolloff=5


map S :w<CR>
map Q :q!<CR>
map R :source /home/waytrue/.config/nvim/init.vim<CR>
map <C-n> :NERDTreeToggle<CR>
map <M-w> <Esc>/<++><CR>c4l

inoremap <S-Tab> <BackSpace>

autocmd FileType markdown inoremap <C-b> <ESC>bi**<ESC>ea**
autocmd FileType markdown inoremap <C-l> <ESC>bi_<ESC>ea_ 
autocmd FileType markdown inoremap <M-CR> <br>



call plug#begin('~/.nvim/plugged')
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() } }
Plug 'vim-airline/vim-airline'
Plug 'altercation/vim-colors-solarized'
Plug 'junegunn/goyo.vim'
Plug 'plasticboy/vim-markdown'
Plug 'godlygeek/tabular'
Plug 'mzlogin/vim-markdown-toc'
Plug 'preservim/nerdtree'
Plug 'ayu-theme/ayu-vim'
call plug#end()

" TextEdit might fail if hidden is not set.
set termguicolors     " enable true colors support
"let ayucolor="light"  " for light version of theme
"let ayucolor="mirage" " for mirage version of theme
let ayucolor="dark"   " for dark version of theme
set background=dark
colorscheme ayu




















