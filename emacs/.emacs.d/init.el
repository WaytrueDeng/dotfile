(org-babel-load-file
 (expand-file-name (file-truename "~/.emacs.d/init-emacs.org")))

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
   '("79730342933b4b15c8c78b6ef92f28ddef9c40b720fcb1fd4ca8396cebe323ca" default))
 '(default-text-scale-amount 30)
 '(org-roam-capture-templates
   '(("d" "default" plain "%?" :target
      (file+head "${slug}.org" "#+title: ${title}\12")
      :unnarrowed t)))
 '(org-roam-completion-everywhere t)
 '(package-selected-packages '(## use-package))
 '(tempel-trigger-prefix "<"))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
